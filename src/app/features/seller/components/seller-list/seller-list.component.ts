import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBike, lucideTimer } from '@ng-icons/lucide';
@Component({
  selector: 'app-seller-list',
  imports: [NgIcon],
  providers: [provideIcons({ lucideBike, lucideTimer })],
  templateUrl: './seller-list.component.html',
  styleUrl: './seller-list.component.css'
})
export class SellerListComponent {
  _router = inject(Router);
  items = [
    {
      id: 1,
      name: 'Riverrinos Pizza',
      image: 'https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png'
    },
    {
      id: 2,
      name: 'Riverrinos Pizza',
      image: 'https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png'
    },
    {
      id: 3,
      name: 'Riverrinos Pizza',
      image: 'https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png'
    },
    {
      id: 4,
      name: 'Riverrinos Pizza',
      image: 'https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png'
    }
  ]
  goToSeller(id: number) {
    console.log(id);
    this._router.navigate(['/seller', id]);
  }
}
