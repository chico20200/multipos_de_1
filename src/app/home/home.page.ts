import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  autor = 'Sebastian Chico';

  multiplos: number[] = [2, 3, 5, 7, 10];
  contadores: number[] = [0, 0, 0, 0, 0];

  primos: number[] = [];
  mostrarPrimos = false;

  aumentar(i: number): void {
    this.contadores[i] += this.multiplos[i];
  }

  alternarPrimos(): void {
    this.mostrarPrimos = !this.mostrarPrimos;
    if (this.mostrarPrimos) {
      this.primos = this.generarPrimos(100);
    }
  }

  private generarPrimos(limite: number): number[] {
    const resultado: number[] = [];
    for (let n = 2; n <= limite; n++) {
      if (this.esPrimo(n)) {
        resultado.push(n);
      }
    }
    return resultado;
  }

  private esPrimo(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}