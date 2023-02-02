import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
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

    addTransactionTobalanceReport$ = createEffect(() => this.actions$.pipe(
        ofType(balanceActions.addTransactionToBalanceReport),
        mergeMap((request) => this.transactionsService.addTransaction(request.transaction)
        .pipe(
            map(() => (balanceActions.requestBalanceReport())),
            catchError(() => of(balanceActions.balanceReportLoadError({
                message: "Failed to load"
            })))
        ))
    ))

    updateBalanceReport$ = createEffect(() => this.actions$.pipe(
        ofType(balanceActions.requestUpdate),
        mergeMap((request) => this.transactionsService.updateTransaction(request.transaction)
        .pipe(
            map((updatedTransaction) => {
                console.log(updatedTransaction)
                return balanceActions.updateTransactionInStore({transaction: updatedTransaction})
            }),
            catchError(() => {
                throw new Error('An error has ocurred in the update effect')
            })
        ))
    ))

    //Add a transaction to server and then load from it look up how to do it.
}