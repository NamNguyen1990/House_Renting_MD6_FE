import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {HousedetailComponent} from "./components/housedetail/housedetail.component";
import {MyhouseComponent} from "./components/myhouse/myhouse.component";
import {OrderListComponent} from "./components/orders/order-list/order-list.component";
import {OrderDetailComponent} from "./components/orders/order-detail/order-detail.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent

  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'view/:id',
    component: HousedetailComponent
  },
  {
    path: 'myhouse',
    component: MyhouseComponent
  },

  {
    path:'orderlist',
    component:OrderListComponent
  },
  {
    path:'show-detail/:id',
    component:OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
