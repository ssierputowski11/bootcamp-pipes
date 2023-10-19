import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  miles: number;

  constructor() {
    this.name = '';
    this.date = '';
    this.amount = 0;
    this.miles = 0;
  }

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = parseInt((event.target as HTMLInputElement).value);
  }

  onMilesChange(event: Event) {
    this.miles = parseInt((event.target as HTMLInputElement).value);
  }
}
