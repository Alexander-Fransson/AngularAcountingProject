import { Component,Input } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  @Input() isRR!: boolean
  happening?: string
  amount!: number 

  constructor(private transactionService: TransactionsService){}

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

      this.transactionService.addTransaction(newTransaction)
    }
  }
}
