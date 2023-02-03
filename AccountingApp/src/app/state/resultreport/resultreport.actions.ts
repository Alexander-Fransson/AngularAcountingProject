import { createAction, props } from "@ngrx/store";
import { ITransaction } from "src/app/ITransaction";

export const resultActions = {
    requestResultReport: createAction(
        '[ResultReport] Request Report'
    ),
    loadResultReport: createAction(
        '[ResultReport] Load Report',
        props<{transactions: ITransaction[]}>()
    ),

    requestNewTransactionToResultRepport: createAction(
        '[ResultReport] Request New Transaction',
        props<ITransaction>()
    ),
    getNewTransactionToStore: createAction(
        '[ResultReport] Get New Transaction To Store',
        props<{transaction: ITransaction}>()
    )
}