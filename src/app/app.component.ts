import { Component } from '@angular/core';
import { EventosService } from './services/eventos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eventos';
  isMenuActive = false;

  activeMenu() {
    if (this.isMenuActive) {
      this.isMenuActive = false;
    }else{
      this.isMenuActive = true;
    }
  }
}
