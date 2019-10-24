import { AuthService } from './../auth.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  logout(event){
    console.log("logging out");
    this.auth.logout();
  }
}
