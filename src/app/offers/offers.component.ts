import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"]
})
export class OffersComponent implements OnInit {
  accountNumber: number;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  onAccountKeyUp(event: any) {
    this.accountNumber = event.target.value;
  }

  getAccountData(event: any) {
    this.httpClient
      .get(
        `https://oaasapi.azurewebsites.net/Offers/PlayerSummary?accountNumber=${this.accountNumber}&distributionModeID=1`
      )
      .subscribe((data: any[]) => {
        console.log(data);
      });
  }
}
