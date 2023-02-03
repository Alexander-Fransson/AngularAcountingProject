import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { Observable } from 'rxjs';
import { balanceActions } from 'src/app/state/balancereport/balancereport.actions';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { balanceSelector } from 'src/app/state/balancereport/balancereport.selectors';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  credit$: Observable<ITransaction[]> = this.store.pipe(select(balanceSelector.selectNegtiveBalance))
  debit$: Observable<ITransaction[]> = this.store.pipe(select(balanceSelector.selectPositiveBalance))
  showAddForm: boolean = false
  buttonAction: string = "Add"

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(balanceActions.requestBalanceReport())
  }
  toggleAddForm(){
    this.showAddForm = !this.showAddForm
    if(this.showAddForm){
      this.buttonAction = "Close"
    }
    else{
      this.buttonAction = "Add"
    }
  }
  onAddedTransaction(newTransaction: ITransaction){
    this.store.dispatch(balanceActions.addTransactionToBalanceReport({transaction: {...newTransaction, amount: newTransaction.amount}}))
    
  }
  onTransactionDeletion(deathrowTransactionId: String){
    this.store.dispatch(balanceActions.requestDeletion({ id: deathrowTransactionId}))
  }
}
