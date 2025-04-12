import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteAnimationService {
  constructor(private router: Router) {
    // Escuchar eventos de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Aplicar animación de entrada a la nueva vista
      this.applyEnterAnimation();
    });

    // Escuchar eventos de inicio de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      // Aplicar animación de salida a la vista actual
      this.applyExitAnimation();
    });
  }

  /**
   * Aplica la animación de entrada a la vista actual
   */
  applyEnterAnimation(): void {
    // Obtener el elemento principal de la vista
    const mainContent = document.querySelector('.router-outlet-container');
    if (mainContent) {
      // Remover clases anteriores
      mainContent.classList.remove('fade-out');
      // Agregar clase de animación de entrada
      mainContent.classList.add('fade-in');
    }
  }

  /**
   * Aplica la animación de salida antes de navegar
   * @param callback Función a ejecutar después de la animación (opcional)
   */
  applyExitAnimation(callback?: () => void): void {
    // Obtener el elemento principal de la vista
    const mainContent = document.querySelector('.router-outlet-container');
    if (mainContent) {
      // Remover clases anteriores
      mainContent.classList.remove('fade-in');
      // Agregar clase de animación de salida
      mainContent.classList.add('fade-out');

      // Si se proporciona un callback, ejecutarlo después de la animación
      if (callback) {
        setTimeout(() => {
          callback();
        }, 300); // Duración de la animación
      }
    } else if (callback) {
      // Si no hay elemento, ejecutar el callback inmediatamente
      callback();
    }
  }
}
