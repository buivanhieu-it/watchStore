import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as CONST from '../core/contrants';
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: '', redirectTo: CONST.frontendURL.HOME, pathMatch: 'full'},
  {path: CONST.frontendURL.HOME, component: HomeComponent},
  {path: CONST.frontendURL.DETAIL, component: ProductDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
