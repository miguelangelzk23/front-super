import { Component, inject } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { lucideTrash2, lucidePlus, lucideMinus } from '@ng-icons/lucide';
import { Router } from '@angular/router';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  store: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    HlmButtonDirective,
    NgIcon
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [
    provideIcons({ lucideTrash2, lucidePlus, lucideMinus })
  ]
})
export class CartComponent {
  _router = inject(Router);

  // Datos de ejemplo para el carrito
  cartItems: CartItem[] = [
    {
      id: 1,
      name: "Arroz Premium",
      price: 25000,
      quantity: 2,
      image: "https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png",
      store: "Supermercado La Esquina"
    },
    {
      id: 2,
      name: "Leche Entera",
      price: 8500,
      quantity: 3,
      image: "/images/categories/1.png",
      store: "Supermercado La Esquina"
    },

  ];

  // Métodos para manipular el carrito
  increaseQuantity(item: CartItem): void {
    item.quantity++;
    this.calculateTotal();
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
    }
  }

  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotal();
    }
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  goToCheckout(): void {
    // Implementar navegación al checkout
    console.log(this.cartItems)
    this._router.navigate(['/checkout']);
  }
}
