import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBike, lucideTimer } from '@ng-icons/lucide';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-home-seller',
  imports: [HlmIconDirective,NgIcon,CommonModule,ProductCardComponent],
  templateUrl: './home-seller.component.html',
  styleUrl: './home-seller.component.css',
  providers:[provideIcons({lucideTimer,lucideBike})],
  host: {
    'ngSkipHydration': 'true'
  }
})
export class HomeSellerComponent implements AfterViewInit, OnInit {
  @ViewChild('categoriesContainer') categoriesContainer!: ElementRef;

  categories: Category[] = [
    {
      id: 1,
      name: 'Hamburguesas',
      products: [
        {
          id: 1,
          name: 'Hamburguesa Clásica',
          price: 12000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Deliciosa hamburguesa con carne 100% de res',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Hamburguesa Doble Queso',
          price: 15000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa doble carne con queso cheddar',
          categoryId: 1
        },
        {
          id: 3,
          name: 'Hamburguesa BBQ',
          price: 14000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
          categoryId: 1
        },
        {
          id: 4,
          name: 'Hamburguesa Vegetariana',
          price: 13000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa de lentejas con verduras frescas',
          categoryId: 1
        }
      ]
    },
    {
      id: 2,
      name: 'Pizzas',
      products: [
        {
          id: 5,
          name: 'Pizza Margherita',
          price: 18000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza clásica con tomate y mozzarella',
          categoryId: 2
        },
        {
          id: 6,
          name: 'Pizza Pepperoni',
          price: 20000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza con pepperoni y queso mozzarella',
          categoryId: 2
        },
        {
          id: 7,
          name: 'Pizza Hawaiana',
          price: 19000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza con jamón y piña',
          categoryId: 2
        },
        {
          id: 8,
          name: 'Pizza Vegetariana',
          price: 17000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza con variedad de verduras',
          categoryId: 2
        }
      ]
    },
    {
      id: 1,
      name: 'Pescados',
      products: [
        {
          id: 1,
          name: 'Hamburguesa Clásica',
          price: 12000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Deliciosa hamburguesa con carne 100% de res',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Hamburguesa Doble Queso',
          price: 15000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa doble carne con queso cheddar',
          categoryId: 1
        },
        {
          id: 3,
          name: 'Hamburguesa BBQ',
          price: 14000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
          categoryId: 1
        },
        {
          id: 4,
          name: 'Hamburguesa Vegetariana',
          price: 13000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa de lentejas con verduras frescas',
          categoryId: 1
        }
      ]
    },
    {
      id: 1,
      name: 'Sopas',
      products: [
        {
          id: 1,
          name: 'Hamburguesa Clásica',
          price: 12000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Deliciosa hamburguesa con carne 100% de res',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Hamburguesa Doble Queso',
          price: 15000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa doble carne con queso cheddar',
          categoryId: 1
        },
        {
          id: 3,
          name: 'Hamburguesa BBQ',
          price: 14000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
          categoryId: 1
        },
        {
          id: 4,
          name: 'Hamburguesa Vegetariana',
          price: 13000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa de lentejas con verduras frescas',
          categoryId: 1
        }
      ]
    },
    {
      id: 1,
      name: 'Carnes',
      products: [
        {
          id: 1,
          name: 'Hamburguesa Clásica',
          price: 12000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Deliciosa hamburguesa con carne 100% de res',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Hamburguesa Doble Queso',
          price: 15000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa doble carne con queso cheddar',
          categoryId: 1
        },
        {
          id: 3,
          name: 'Hamburguesa BBQ',
          price: 14000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
          categoryId: 1
        },
        {
          id: 4,
          name: 'Hamburguesa Vegetariana',
          price: 13000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa de lentejas con verduras frescas',
          categoryId: 1
        }
      ]
    },
    {
      id: 1,
      name: 'Pastas',
      products: [
        {
          id: 1,
          name: 'Hamburguesa Clásica',
          price: 12000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Deliciosa hamburguesa con carne 100% de res',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Hamburguesa Doble Queso',
          price: 15000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa doble carne con queso cheddar',
          categoryId: 1
        },
        {
          id: 3,
          name: 'Hamburguesa BBQ',
          price: 14000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
          categoryId: 1
        },
        {
          id: 4,
          name: 'Hamburguesa Vegetariana',
          price: 13000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa de lentejas con verduras frescas',
          categoryId: 1
        }
      ]
    },
  ];

  categoriasList = this.categories.map(categoria => categoria.name);
  isQuantitySelectorVisible = false; // Controla si el selector de cantidad está visible
  quantity = 1; // Cantidad inicial

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Desplazar a la parte superior cuando se inicializa el componente
    window.scrollTo(0, 0);

    // Suscribirse a los eventos de navegación para desplazar a la parte superior
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  // Muestra el selector de cantidad
  showQuantitySelector() {
    this.isQuantitySelectorVisible = true;
  }

  // Incrementa la cantidad
  increaseQuantity() {
    this.quantity++;
  }

  // Decrementa la cantidad (asegurando que no sea menor a 1)
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Método para desplazarse suavemente a una categoría
  scrollToCategory(categoryName: string): void {
    const element = document.getElementById(categoryName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  ngAfterViewInit() {
    // Configurar el observador de intersección para detectar cuando el elemento está fijo
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
      const container = document.querySelector('.categories-fixed-container');
      if (container) {
        // Crear un elemento de referencia en la parte superior de la página
        const referenceElement = document.createElement('div');
        referenceElement.style.position = 'absolute';
        referenceElement.style.top = '0';
        referenceElement.style.height = '1px';
        document.body.appendChild(referenceElement);

        // Crear el observador de intersección
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // El elemento de referencia está visible, lo que significa que el contenedor no está fijo
                container.classList.remove('sticky');
              } else {
                // El elemento de referencia no está visible, lo que significa que el contenedor está fijo
                container.classList.add('sticky');
              }
            });
          },
          { threshold: 0 }
        );

        // Observar el elemento de referencia
        observer.observe(referenceElement);
      }
    }, 0);
  }
}
