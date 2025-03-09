import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardGameComponent} from './components/card-game/card-game.component';

@Component({
  selector: 'app-root',
  imports: [CardGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jogo-da-memoria';
}
