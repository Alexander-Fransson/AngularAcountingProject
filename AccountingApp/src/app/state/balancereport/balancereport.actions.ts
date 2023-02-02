import { createAction, props } from "@ngrx/store";
import { ITransaction } from "src/app/ITransaction";

export const balanceActions = {
    requestBalanceReport: createAction(
        '[BalanceReport] Request Report'
    ),
    loadBalanceReport: createAction(
        '[BalanceReport] Responds With Report',
        props<{transactions: ITransaction[]}>()
    ),

    addTransactionToBalanceReport: createAction(
        '[BalanceReport] Add Trnsaction',
        props<{transaction: ITransaction}>()
    ),
    
    requestUpdate: createAction(
        '[BalanceReport] Request Update',
        props<{transaction: ITransaction}>()
    ),
    updateTransactionInStore: createAction(
        '[BalanceReport] Update In Store',
        props<{transaction: ITransaction}>()
    ),

    balanceReportLoadError: createAction(
        '[BalanceReport] Responds With Error',
        props<{message: String}>()
    )
}