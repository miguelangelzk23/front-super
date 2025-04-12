import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSquareMenu } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HeaderComponent } from "./shared/layout/header/header.component";
import { CommonModule } from '@angular/common';
import { RouteAnimationService } from './shared/services/route-animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  providers: [
    provideIcons({ lucideSquareMenu }),
    RouteAnimationService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mercadoAppFront';

  constructor(private routeAnimationService: RouteAnimationService) {}

  ngOnInit(): void {
    // Aplicar animación de entrada al cargar la aplicación
    this.routeAnimationService.applyEnterAnimation();
  }
}
