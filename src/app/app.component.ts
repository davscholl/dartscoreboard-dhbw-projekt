import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dartscoreboard-dhbw-projekt';

  public onClick(): void {
    console.log('HIIII');
  }
}
