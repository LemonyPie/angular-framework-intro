import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular learning';
  user = 'Artemee';
  elements: number[] = [];

  changeName() {
    this.user = 'New Artemee';
  }
  addElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element) {
    return element % 2 === 0 ? 'green' : 'red';
  }
}
