import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-update-signal',
  templateUrl: './update-signal.component.html',
  styleUrls: ['./update-signal.component.scss']
})
export class UpdateSignalComponent {

  public quantity = signal<number>(4);

  public onDereaseQuantity(): void {
    this.quantity.update(value => value - 1);
  }

  public onIncreaseQuantity(): void {
    this.quantity.update(value => value + 1);
  }

}
