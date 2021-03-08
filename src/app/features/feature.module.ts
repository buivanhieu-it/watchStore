import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { BreadcrumsComponent } from './layout/breadcrums/breadcrums.component';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [
  FooterComponent,
  NavbarComponent,
    HomeComponent,
    BreadcrumsComponent,
    ProductComponent,
    ListProductComponent,
    ProductDetailComponent,
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    CommonModule,
    FeatureRoutingModule,
  ],
})
export class FeatureModule { }
