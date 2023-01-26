import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent implements OnInit{
  @Input() transactionData!: ITransaction
  @Output() deathrowTransaction = new EventEmitter()
  showChangeForm:boolean = false 
  happening!:string
  amount!:number

  constructor(private transactionService: TransactionsService) {}

  ngOnInit():void{
    this.happening = this.transactionData.happening
    this.amount = this.transactionData.amount
  }

  showForm():void{
    this.showChangeForm = !this.showChangeForm
  }

  updateTransaction():void{
    this.transactionData.happening = this.happening
    this.transactionData.amount = this.amount

    this.transactionService.updateTransaction(this.transactionData).subscribe((transaction) => (this.transactionData = transaction));
    this.showForm()
  }

  deleteTransaction():void{
    this.deathrowTransaction.emit(this.transactionData)
  }
}
