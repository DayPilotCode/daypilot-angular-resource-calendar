import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  imports: [CalendarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
