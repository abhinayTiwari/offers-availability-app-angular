import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  getUserDetails(username, password) {
    console.log(username);
    this.http
      .get(
        `https://oaasapi.azurewebsites.net/Offers/PlayerSummary?accountNumber=${username}&distributionModeID=1`
      )
      .subscribe((data: any[]) => {
        if (data.Offers.length > 0) {
          localStorage.setItem("token", "secretKey");
          this.router.navigate(["/home"]);
        } else {
          alert("Account Number not found!!");
          this.router.navigate(["/login"]);
        }
      });
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }
}
