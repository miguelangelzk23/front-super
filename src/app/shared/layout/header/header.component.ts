import { Component, OnInit } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/ui-sheet-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignJustify, lucideChevronRight, lucideShoppingCart, lucideArrowLeft } from '@ng-icons/lucide';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [ HlmIconDirective,  HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetDescriptionDirective,
 NgIcon,
    HlmSheetHeaderComponent,
    HlmSheetTitleDirective,
    BrnSheetContentDirective, BrnSheetTriggerDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

  providers: [provideIcons({ lucideChevronRight,lucideAlignJustify,lucideShoppingCart, lucideArrowLeft })],
})
export class HeaderComponent implements OnInit {
  isHomeRoute: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verificar la ruta actual
    this.checkCurrentRoute();

    // Suscribirse a los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkCurrentRoute();
    });
  }

  checkCurrentRoute(): void {
    // Verificar si estamos en la ruta principal
    this.isHomeRoute = this.router.url === '/' || this.router.url === '';
  }

  goBack(): void {
    // Navegar hacia atrás
    window.history.back();
  }
}
