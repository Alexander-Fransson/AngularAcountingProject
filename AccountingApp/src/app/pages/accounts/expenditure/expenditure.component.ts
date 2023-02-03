import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { Observable } from 'rxjs';
import { resultActions } from 'src/app/state/resultreport/resultreport.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { resultSelector } from 'src/app/state/resultreport/resultreport.selectors';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  credit$: Observable<ITransaction[]> = this.store.pipe(select(resultSelector.selectNegativeresult))
  debit$: Observable<ITransaction[]> = this.store.pipe(select(resultSelector.selectPositiveResult))
  showAddForm: boolean = false
  buttonAction: string = "Add"

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
      this.store.dispatch(resultActions.requestResultReport())
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
    this.store.dispatch(resultActions.requestNewTransactionToResultRepport({
      ...newTransaction, 
      amount: newTransaction.amount*-1
    }))
  }
}
