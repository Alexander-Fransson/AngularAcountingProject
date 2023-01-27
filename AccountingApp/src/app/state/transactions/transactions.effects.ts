import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import {map, mergeMap, catchError} from 'rxjs/operators';
import { TransactionsService } from "src/app/services/transactions.service";

@Injectable()
export class TransactionEffects {

    constructor(private actions$: Actions, private transactionService: TransactionsService) {}

    loadTransactions$ = createEffect(() => this.actions$.pipe(
        ofType('[Transaction Component] loadTransaction'),
        mergeMap(() => this.transactionService.getTransactions()
          .pipe(
            map(events => ({ type: '[Transaction API] loadTransaction', payload: events })),
            catchError(() => EMPTY)
          ))
        )
      );
}