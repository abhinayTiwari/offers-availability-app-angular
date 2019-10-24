import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }


  ngOnInit() {
    if(this.auth.isLoggedIn())
      this.router.navigate(["./home"])
  }

}
