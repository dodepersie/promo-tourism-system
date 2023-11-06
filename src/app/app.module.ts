import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { RegisterMerchantComponent } from './components/register-merchant/register-merchant.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './components/login/login.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardUserIndexComponent } from './pages/dashboard-user-index/dashboard-user-index.component';
import { HomeMainComponent } from './components/home-main/home-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterMerchantComponent,
    NavbarComponent,
    LoginPageComponent,
    TopBannerComponent,
    JumbotronComponent,
    WhyUsComponent,
    FooterComponent,
    DashboardUserIndexComponent,
    HomeMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
