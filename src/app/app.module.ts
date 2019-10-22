import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { OfferComponent } from "./offer/offer.component";
import { LoginComponent } from "./user/login/login.component";
import { OffersComponent } from "./offers/offers.component";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "home", component: OffersComponent },
  {
    path: "login",
    component: UserComponent,
    children: [{ path: "", component: LoginComponent }]
  },

  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    LoginComponent,
    OffersComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
