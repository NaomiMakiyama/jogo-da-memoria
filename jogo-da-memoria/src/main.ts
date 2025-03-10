import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CardGameComponent} from './app/components/card-game/card-game.component';
import {WinningDialogComponent} from './app/components/winning-dialog/winning-dialog.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * +innerWidth + "px";

  let size = Math.random() * 5;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + "px";
  e.style.animationDuration = 4 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 50000);
}

setInterval(function () {
  stars();
}, 100);
