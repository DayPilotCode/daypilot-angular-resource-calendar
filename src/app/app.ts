import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CalendarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
