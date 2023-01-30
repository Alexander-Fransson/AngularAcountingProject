import { ITransaction } from "../ITransaction";

//Here goes all interfaces for states

export interface AppState {
    transactionState: ITransaction
    allTransactions: ITransaction[]
}


