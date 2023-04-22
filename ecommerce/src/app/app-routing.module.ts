import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", redirectTo: "", pathMatch: "full"},
  {path: "seller-auth", component: SellerAuthComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
