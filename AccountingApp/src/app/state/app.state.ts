import { ITransaction } from "../ITransaction";

//Here goes all interfaces for states
export interface ITransactionState {
    transactionState: ITransaction[]
}

export interface IBalanceReport {
    positveBalance: ITransaction[],
    negativeBalance: ITransaction[]
}

export interface AppState {
    allTransactions: ITransaction[],
    balanceReport: IBalanceReport
}


