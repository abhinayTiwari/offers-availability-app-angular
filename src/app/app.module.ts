import { MaterialModule } from "./material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { OfferComponent } from "./offer/offer.component";
import { LoginComponent } from "./user/login/login.component";
import { OffersComponent } from "./offers/offers.component";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{ path: "", component: OffersComponent }]
  },
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
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
