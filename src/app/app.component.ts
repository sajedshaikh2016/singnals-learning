import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public firstName: string = "Sajed";
  public lastName: string = "Shaikh";
  public fullName: string = this.firstName + " " + this.lastName;

  public changeFirstName(fName: string): void {
    this.firstName = fName;
  }

  public changeLastName(lName: string): void {
    this.lastName = lName;
  }
}
