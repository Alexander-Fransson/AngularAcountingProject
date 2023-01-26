import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';
import { updateTransaction } from 'src/app/state/transactions/transactions.actions';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent implements OnInit, OnDestroy{
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

  ngOnDestroy(): void {
      this.dataSubscription.unsubscribe()
  }

  showForm():void{
    this.showChangeForm = !this.showChangeForm
  }

  updateTransaction():void{

    //Trying to learn ngrx
    this.store.dispatch(updateTransaction(this.transactionData))

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
