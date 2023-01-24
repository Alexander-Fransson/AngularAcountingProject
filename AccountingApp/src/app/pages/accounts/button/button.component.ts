import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() showAddForm = new EventEmitter()

  onClick(){
    this.showAddForm.emit()
    console.log('click')
  }
}
