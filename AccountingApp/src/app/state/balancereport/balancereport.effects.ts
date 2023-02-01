import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createReducer } from "@ngrx/store";
import { catchError, mergeMap, map, of, exhaustMap } from "rxjs";
import { TransactionsService } from "src/app/services/transactions.service";
import { balanceActions } from "./balancereport.actions";

@Injectable()
export class BalanceEffects {
    constructor(
        private actions$: Actions,
        private transactionsService: TransactionsService
    ) {}

    loadBalanceReport$ = createEffect(() => this.actions$.pipe(
        ofType(balanceActions.requestBalanceReport),
        mergeMap(() => this.transactionsService.getTransactions()
        .pipe(
            map(events => (balanceActions.loadBalanceReport(
            {transactions: events.filter((event) => event.report == "BR")}
            ))),
            catchError(() => of(balanceActions.balanceReportLoadError({
                message: "Failed to load"
            })))
        ))
    ))

    // addTransactionToBalance$ = createEffect(() => this.actions$.pipe(
    //     ofType(balanceActions.addTransactionToBalanceReport), 
    //     exhaustMap()?
    // ))

    //Add a transaction to server and then load from it look up how to do it.
}