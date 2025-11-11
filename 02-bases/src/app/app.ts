import { Component, signal } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lucas Ortins');
  textoFooter = 'Soy un footer';
  cambiarFooter() {
    this.textoFooter = 'Footer cambiado';
  }
  
}
