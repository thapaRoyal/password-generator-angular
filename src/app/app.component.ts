import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeLetters = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeLetters = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`About to generate a password with the following:
    Includes letters: ${this.includeLetters}
    Includes Numbers: ${this.includeNumbers}
    Includes Symbols: ${this.includeSymbols}
    `);
    this.password = 'MY PASSWORD !!!';
  }
}
