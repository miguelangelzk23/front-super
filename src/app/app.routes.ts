import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { HomeSellerComponent } from './features/seller/components/home-seller/home-seller.component';
import { SellerListComponent } from './features/seller/components/seller-list/seller-list.component';

export const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"seller", component:HomeSellerComponent
  },
  {
    path:"seller/:id", component:HomeSellerComponent
  },
  {
    path:"sellerlist/:id", component:SellerListComponent
  }

];
