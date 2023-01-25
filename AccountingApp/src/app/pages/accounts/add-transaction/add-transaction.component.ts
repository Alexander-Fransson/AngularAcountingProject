import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  @Input() isRR!: boolean
  @Output() addedTransaction: EventEmitter<ITransaction> = new EventEmitter()
  happening?: string
  amount!: number 
  date: Date = new Date()

  onSubmit(): void{
    if(this.amount == 0){
      alert("A business event must deal with money!")
    }
    else if(!this.happening){
      alert("You must fill out the form to send it!")
    }
    else{
      const newTransaction: ITransaction = {
        happening: this.happening,
        amount: this.amount,
        report: this.isRR ? "RR" : "BR"
      }

      this.addedTransaction.emit(newTransaction)
      this.happening = ""
      this.amount = 0
    }
  }
}
