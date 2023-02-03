import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, map, of } from "rxjs";
import { TransactionsService } from "src/app/services/transactions.service";
import { resultActions } from "./resultreport.actions";

@Injectable()
export class ResultEffects {
    constructor(
        private actions$: Actions,
        private transactionService: TransactionsService
    ){}

    loadResultReport$ = createEffect(() => this.actions$.pipe(
        ofType(resultActions.requestResultReport),
        mergeMap(() => this.transactionService.getTransactions()
        .pipe(
            map(events => (resultActions.loadResultReport({
                transactions: events.filter((event) => event.report === "RR")
            })),
            catchError((error) => {
                throw new Error(error)
            }))
        ))
    ))

    addToResultreport$ = createEffect(() => this.actions$.pipe(
        ofType(resultActions.requestNewTransactionToResultRepport),
        mergeMap((request) => this.transactionService.addTransaction(request).
        pipe(
            map(event => resultActions.getNewTransactionToStore({transaction: event})),
            catchError((error) => {
                throw new Error(error)
            })
        ))
    ))
}