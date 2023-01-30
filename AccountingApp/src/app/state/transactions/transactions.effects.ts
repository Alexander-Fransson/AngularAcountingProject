import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { TransactionsService } from "src/app/services/transactions.service";
import { deleteTransaction, loadTransactions, deletedTransaction, transactionError } from "./transactions.actions";
import { ITransaction } from "src/app/ITransaction";

@Injectable()
export class TransactionEffects {

  constructor(private actions$: Actions, private transactionService: TransactionsService) {}

  loadTransactions$ = createEffect(() => this.actions$.pipe(
    ofType(loadTransactions),
    mergeMap(() => this.transactionService.getTransactions()
      .pipe(
        map(events => ({ type: '[Transaction API] loadTransaction', payload: events })),
        catchError(() => of(transactionError))
      )
    ))
  );

  // deleteTransaction$ = createEffect(() => this.actions$.pipe(
  //   ofType(deleteTransaction),
  //   exhaustMap(action => this.transactionService.deleteTransaction(action).pipe(
  //     map((event) => ({type: deletedTransaction, payload: event})),
  //     catchError(() => of(transactionError))
  //   ))
  // ))
    
}