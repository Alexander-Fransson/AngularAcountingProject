import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from '../../../state/transactions/transactions.selectors'
import { AppState } from 'src/app/state/app.state';
import { balanceSelector,  } from 'src/app/state/balancereport/balancereport.selectors';
import { balanceActions } from 'src/app/state/balancereport/balancereport.actions';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {

  transactions: ITransaction[] = []
  debit$: Observable<ITransaction[]> = this.store.pipe(select(balanceSelector.selectNegtiveBalance))
  credit$: Observable<ITransaction[]> = this.store.pipe(select(balanceSelector.selectPositiveBalance))
  showAddForm: boolean = false
  buttonAction: string = "Add"

  constructor(
    private transactionService: TransactionsService,
    private store: Store<AppState>
  ) {
    //this.transactionStore.pipe(select(selectors.selectAllTransactions))
  }

  ngOnInit(): void {

    this.store.dispatch(balanceActions.requestBalanceReport())
    //this.transactionStore.dispatch({type:'[Transaction Component] loadTransaction'})
    this.transactionService.getTransactions().subscribe((transactions) => {

      this.transactions = transactions
    })
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
    this.transactionService.addTransaction(newTransaction).subscribe((newTransaction) => {

      this.transactions.push(newTransaction)
    })
  }
  onTransactionDeletion(deathrowTransaction: ITransaction){
    this.transactionService.deleteTransaction(deathrowTransaction).subscribe(() => {
      this.ngOnInit()
    })
  }
}