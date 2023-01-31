import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { TransactionsService } from "src/app/services/transactions.service";
import * as TransactionActions from "./transactions.actions";

@Injectable()
export class TransactionEffects {

  constructor(private actions$: Actions, private transactionService: TransactionsService) {}

  loadTransactions$ = createEffect(() => this.actions$.pipe(
    ofType( TransactionActions.loadTransactions),
    mergeMap(() => this.transactionService.getTransactions()
      .pipe(
        map(events => (TransactionActions.getTransactions({loadedTransactions: events}))),
        catchError(() => of(TransactionActions.transactionError))
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