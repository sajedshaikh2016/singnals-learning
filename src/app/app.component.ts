import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public firstName = signal("Sajed");
  public lastName = signal("Shaikh");
  public fullName = computed(() => this.firstName() + " " + this.lastName());

  public changeFirstName(fName: string): void {
    this.firstName.set(fName);
  }

  public changeLastName(lName: string): void {
    this.lastName.set(lName);
  }
}
