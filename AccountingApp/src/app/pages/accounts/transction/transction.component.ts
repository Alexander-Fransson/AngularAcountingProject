import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent {
  @Input() transactionData!: ITransaction
  showChangeForm:boolean = false 

  showForm():void{
    this.showChangeForm = !this.showChangeForm
  }
}
