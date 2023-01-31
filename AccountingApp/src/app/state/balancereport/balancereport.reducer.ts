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
    on(
        balanceActions.loadBalanceReport,
        (state, { transactions }) => ({
            ...state,
            positveBalance: transactions.filter((transaction: ITransaction) => transaction.amount > 0),
            negativeBalance: transactions.filter((transactions: ITransaction) => transactions.amount < 0)
        })    
    ),
    on(
        balanceActions.balanceReportLoadError,
        (state, {message}) => {console.log(message); return {...state}}
    )
)
