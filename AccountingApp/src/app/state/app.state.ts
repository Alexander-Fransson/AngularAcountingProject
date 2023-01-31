import { ITransaction } from "../ITransaction";

//Here goes all interfaces for states
export interface ITransactionState {
    transactionState: ITransaction[]
}

export interface AppState {
    transactionState: ITransaction
    allTransactions: ITransaction[]
}


