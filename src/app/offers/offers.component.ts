import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"]
})
export class OffersComponent implements OnInit {
  accountNumber: number;
  expiredOffers: any [] = [];
  activeOffers: any [] = [];
  completedOffers: any[] = [];
  redeemedOffers: any [] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  onAccountKeyUp(event: any) {
    this.accountNumber = event.target.value;
  }
  convertToNormalDateFormat(dateString: string){
    return new Date(dateString).toString().slice(0,15)
  }

  getAccountData(event: any) {
    this.httpClient
      .get(
        `https://oaasapi.azurewebsites.net/Offers/PlayerSummary?accountNumber=${this.accountNumber}&distributionModeID=1`
      )
      .subscribe((data: any[]) => {
        const offers = data.Offers.map((cur=> ({ ...cur, 
                                          gameImageUrl: `../../assets/img/${cur.GameTheme.toLowerCase().split(" ").join("-")}.png`,
                                          expiredDateFormat: this.convertToNormalDateFormat(cur.ExpirationDate)}
                                        )));
          const curDate = new Date().getTime();
          this.expiredOffers = offers.filter((cur)=> new Date(cur.ExpirationDate).getTime() < curDate);
          this.activeOffers = offers.filter((cur)=> new Date(cur.ExpirationDate).getTime() > curDate);                   
          this.redeemedOffers = offers.filter((cur)=> cur.IsPrizeRedeemed );
          this.completedOffers = offers.filter((cur)=> cur.IsGamePlayed );

      });
  }
  
}
