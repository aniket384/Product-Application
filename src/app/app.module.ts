import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './content/about/about.component';
import { OfferComponent } from './content/offer/offer.component';
import { ProductsComponent } from './content/products/products.component';
import { ProductcardComponent } from './content/products/productcard/productcard.component';
import { ProductinfoComponent } from './content/products/productinfo/productinfo.component';
import { ProductorderComponent } from './content/products/productorder/productorder.component';
import { LoginComponent } from './content/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    OfferComponent,
    ProductsComponent,
    ProductcardComponent,
    ProductinfoComponent,
    ProductorderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
