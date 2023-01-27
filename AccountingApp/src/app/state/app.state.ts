import { createSelector } from "@ngrx/store";
import { ITransaction } from "../ITransaction";

//Here goes all interfaces for states

export interface AppState {
    transactionState: ITransaction
    allTransactions: ITransaction[]
}

//therse are called projectors
export const selectTransactionState = (state: AppState) => state.transactionState
export const selectAllTransactionStates = (state: AppState) => state.allTransactions

//Create selector can take up to 8 projector interfaces
export const selectTransactionStateId = createSelector(selectTransactionState, (state: ITransaction) => state.id)
export const selectBrTransactions = createSelector(selectAllTransactionStates, (allTra:ITransaction[]) => allTra.filter(tra => tra.report === "BR"))

//you may create selectors without projectors and this will return a dictionary
// result type - { books: Book[]; query: string }
// const selectBooksPageViewModel = createSelector({
//     books: selectBooks, // result type - Book[]
//     query: selectQuery, // result type - string
//   });

//you can remove the memorised value from memory by using t.ex selectAllTransactionStates.release(), if you release a selector
//all of its ancestors will also be released so selectBrTransactions will also release selectAllTrans... => null

