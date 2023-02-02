import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';
import { AppState } from 'src/app/state/app.state';
import { balanceActions } from 'src/app/state/balancereport/balancereport.actions';

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

  constructor(private transactionService: TransactionsService, private store: Store<AppState>) {}

  ngOnInit():void{
    this.happening = this.transactionData.happening
    this.amount = this.transactionData.amount
  }
  showForm():void{
    this.showChangeForm = !this.showChangeForm
  }
  updateTransaction():void{

    this.store.dispatch(balanceActions.requestUpdate({transaction: {
      ...this.transactionData,
      happening: this.happening,
      amount: this.amount
    }}))
    
    this.showForm()
  }

  deleteTransaction(){
    this.store.dispatch(balanceActions.requestDeletion({id: this.transactionData.id!}))
  }
}


// You inheret this from OnDestroy and it removes the subscription from memory quite like an event
  // ngOnDestroy(): void {
  //     this.dataSubscription.unsubscribe()
  // }
