import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"]
})
export class OffersComponent implements OnInit {
  displayedColumns: string[] = ["offerName", "expiredOn", "clickToView"];
  accountNumber: number;
  expiredOffers: any[] = [];
  activeOffers: any[] = [];
  completedOffers: any[] = [];
  redeemedOffers: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  onAccountKeyUp(event: any) {
    this.accountNumber = event.target.value;
  }
  convertToNormalDateFormat(dateString: string) {
    const date:Date = new Date(dateString);
    const timezoneOffeset:number = date.getTimezoneOffset();
    const localDate:Date = new Date(date.getTime() + timezoneOffeset *60*1000);
    const hours:number = localDate.getHours() %12 ? localDate.getHours()%12 : 12;

    return `${localDate.toString().slice(0, 15)} ${hours}:${localDate.getMinutes()} ${localDate.getHours() > 12? "PM": "AM"}`;
  }

  getAccountData(event: any) {
    this.httpClient
      .get(
        `https://oaasapi.azurewebsites.net/Offers/PlayerSummary?accountNumber=${this.accountNumber}&distributionModeID=1`
      )
      .subscribe((data: any[]) => {
        const offers = data.Offers.map(cur => ({
          ...cur,
          gameImageUrl: `../../assets/img/${cur.GameTheme.toLowerCase()
            .split(" ")
            .join("-")}.png`,
          expiredDateFormat: this.convertToNormalDateFormat(cur.ExpirationDate)
        }));

        this.activeOffers = offers.filter(offer => offer.StatusID === 5 && !offer.IsGamePlayed && !offer.IsPrizeRedeemed);
        this.completedOffers = offers.filter(offer => offer.IsGamePlayed && !offer.IsPrizeRedeemed);
        this.expiredOffers = offers.filter(offer => offer.StatusID !== 5 && !offer.IsGamePlayed && !offer.IsPrizeRedeemed);
        this.redeemedOffers = offers.filter(offer => offer.IsPrizeRedeemed);
      });
  }
}
