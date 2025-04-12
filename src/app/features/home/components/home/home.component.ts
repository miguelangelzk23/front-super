import { Component, inject } from '@angular/core';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import Autoplay from 'embla-carousel-autoplay';
import { HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent } from '@spartan-ng/ui-carousel-helm';
import { Router } from '@angular/router';

export interface Category  {
  Id:number,
  Nombre:string,
  UrlImage:string,
  Descripcion:string
}

@Component({
  selector: 'app-home',
  imports: [  HlmFormFieldModule,
    HlmInputDirective,HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[provideIcons({ lucideChevronRight })]
})
export class HomeComponent {
  _router = inject(Router);

  items = Array.from({ length: 5}, (_, i) => i + 1);
  public plugins = [Autoplay({ delay: 3000 })];
  Categories :Category []= [
    {
    Id: 1,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner1.png"
  },
  {
    Id: 2,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner2.png"

    },  {
    Id: 3,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png"
  },
  {
    Id: 4,
    Nombre:"Plaza",
    Descripcion:"Plaza de mercado",
    UrlImage:"https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-05/puestos-en-las-plazas-de-mercado.jpg"
  }
  ]

  categoryList: Category[] = [
    {
      Id: 1,
      Nombre: "Restaurantes",
      Descripcion: "Comida típica colombiana",
      UrlImage: "https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-05/puestos-en-las-plazas-de-mercado.jpg"
    },
    {
      Id: 2,
      Nombre: "Supermercados",
      Descripcion: "Productos de primera necesidad",
      UrlImage: "https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png"
    },
    {
      Id: 3,
      Nombre: "Farmacias",
      Descripcion: "Medicamentos y productos de salud",
      UrlImage: "https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner2.png"
    },
    {
      Id: 4,
      Nombre: "Verdulerías",
      Descripcion: "Frutas y verduras frescas",
      UrlImage: "https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner1.png"
    },
    {
      Id: 5,
      Nombre: "Panaderías",
      Descripcion: "Pan y pasteles artesanales",
      UrlImage: "https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner3.png"
    },
    {
      Id: 6,
      Nombre: "Carnicerías",
      Descripcion: "Carnes frescas y embutidos",
      UrlImage: "https://test-mercado.s3.sa-east-1.amazonaws.com/images-app/images/banner2.png"
    }
  ];

  goToCategory(id: number) {
    console.log(id);
    this._router.navigate(['/sellerlist', id]);
  }
}


