import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  //proprietà dinamiche
  @Input() color!: string;
  @Input() text!: string;

  @Output() btnClick = new EventEmitter();
  //! Creazione di un evento da emettere, quindi non creato direttamente su questo componente ma generato e poi emesso da un altro.

  onClick(): void {
    this.btnClick.emit()
  }
}
