import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ErrorComponent } from './error/error.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuard } from './seller-auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title:"GoodPurchase"
  },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "seller-auth",
    component: SellerAuthComponent,
    title:"GoodPurchase - Sellers"
  },
  {
    path: "seller-home",
    component: SellerHomeComponent,
    canActivate:[SellerAuthGuard],
    title:"GoodPurchase - Seller Portal"
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
