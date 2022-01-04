import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from './injectables/auth.injectable';
import { ProtectedComponent } from './protected/protected.component';
import { LogginGuard } from './services/logged-in.guard';
import { MainComponent } from './main/main.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    LoginComponent,
    ProtectedComponent,
    MainComponent,
    MoreinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ...AUTH_PROVIDERS,
    LogginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
