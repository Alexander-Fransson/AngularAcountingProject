import { createReducer, on } from "@ngrx/store";
import { ITransaction } from "src/app/ITransaction";
import { IBalanceReport } from "../app.state";
import { balanceActions } from "./balancereport.actions";

export const BALANCE_REPORT_FEATURE_KEY = 'balanceReport'

export const initialBalanceReport: IBalanceReport = {
    positveBalance: [
        {
            id: "shmebjulock",
            happening: "shmebjulock",
            amount:12,
            report: "BR",
            date: new Date()
        }
    ],
    negativeBalance: []
}

export const balanceReducer = createReducer(
    initialBalanceReport, 
    on( balanceActions.loadBalanceReport,
        (state, { transactions }) => ({
            ...state,
            positveBalance: transactions.filter((transaction: ITransaction) => transaction.amount > 0),
            negativeBalance: transactions.filter((transactions: ITransaction) => transactions.amount < 0)
        })    
    ),

    on( balanceActions.balanceReportLoadError,
        (state, {message}) => {console.log(message); return {...state}}
    ),
    
    on( balanceActions.updateTransactionInStore,
        (state, {transaction}) => {
            if(transaction.amount < 0){
                return {
                    ...state,
                    positveBalance: state.positveBalance.filter(event => event.id !== transaction.id),
                    negativeBalance: [...state.negativeBalance.filter(event => event.id !== transaction.id), transaction]
                }
            }
            else{
                return {
                    ...state,
                    positveBalance: [...state.positveBalance.filter(event => event.id !== transaction.id), transaction],
                    negativeBalance: state.negativeBalance.filter(event => event.id !== transaction.id)
                }
            }
        }
    )
)
