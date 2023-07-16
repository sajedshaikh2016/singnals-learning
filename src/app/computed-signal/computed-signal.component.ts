import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  styleUrls: ['./computed-signal.component.scss']
})
export class ComputedSignalComponent {
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
