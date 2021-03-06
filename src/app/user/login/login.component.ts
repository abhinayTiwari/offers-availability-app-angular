import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  accountNumber:number;
  
  onAccountKeyUp(event: any) {
    this.accountNumber = event.target.value;
    console.log(this.accountNumber)
  }

  constructor(private Auth: AuthService) {}

  ngOnInit() {}
  loginUser(event) {
    event.preventDefault();
    const accountNumber = document.querySelector("#account-number").value;
    const password = document.querySelector("#password").value;
    this.Auth.getUserDetails(accountNumber, password);
  }
}
