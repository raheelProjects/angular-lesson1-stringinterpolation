import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: String;

  //just for fun @byRaheel
  myage: number = 23;
  firstName: String = 'Raheel';
  middleName: String = 'Jamshed';
  lastName: String = 'Minhas';
  fullName: String = `${this.firstName} ${this.middleName} ${this.lastName}`;
  fatherName: String = `${this.middleName} Iqbal ${this.lastName}`;
  birthYear: Number = new Date().getFullYear() - this.myage;

  //proffesional practise
  constructor() {
    this.title = 'String Interpolation angular';
  }
}
