import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from '../../../state/transactions/transactions.selectors'
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {

  transactions: ITransaction[] = []
  debit: ITransaction[] = []
  credit: ITransaction[] = []
  showAddForm: boolean = false
  buttonAction: string = "Add"
  transactions$: Observable<ITransaction[]> = this.transactionStore.pipe(select(selectors.selectAllTransactions))

  constructor(
    private transactionService: TransactionsService,
    private transactionStore: Store<AppState>
  ) {
    this.transactionStore.pipe(select(selectors.selectAllTransactions))
  }

  ngOnInit(): void {

    this.transactionStore.dispatch({type:'[Transaction Component] loadTransaction'})
    this.transactionService.getTransactions().subscribe((transactions) => {

      console.log(this.transactions$)

      this.transactions = transactions
      this.debit = this.transactions.filter(transaction => transaction.amount < 0 && transaction.report == "BR")
      this.credit = this.transactions.filter(transaction => transaction.amount > 0 && transaction.report == "BR")
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
      this.debit = this.transactions.filter(transaction => transaction.amount < 0 && transaction.report == "BR")
      this.credit = this.transactions.filter(transaction => transaction.amount > 0 && transaction.report == "BR")
    })
  }
  onTransactionDeletion(deathrowTransaction: ITransaction){
    this.transactionService.deleteTransaction(deathrowTransaction).subscribe(() => {
      this.ngOnInit()
    })
  }
}