import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() showAddForm = new EventEmitter()
  @Input() action: string = "Add"
  onClick(){
    this.showAddForm.emit()
    console.log('click')
  }
}
