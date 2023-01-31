import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent implements OnInit {
  @Input() transactionData!: ITransaction
  @Output() deathrowTransaction = new EventEmitter()
  showChangeForm:boolean = false 
  happening!:string
  amount!:number
  dataSubscription:any

  storedTransactions$ = Observable<ITransaction[]> 

  constructor(private transactionService: TransactionsService, private store: Store<ITransaction>) {}

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

    this.dataSubscription = this.transactionService.updateTransaction(this.transactionData)
    .subscribe((transaction) => (this.transactionData = transaction));
    this.showForm()
  }
  deleteTransaction():void{
    this.deathrowTransaction.emit(this.transactionData)
  }
}


// You inheret this from OnDestroy and it removes the subscription from memory quite like an event
  // ngOnDestroy(): void {
  //     this.dataSubscription.unsubscribe()
  // }
