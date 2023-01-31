import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState, ITransactionState } from "../app.state";
import { transactionFeatureKey } from "./transactions.reducer";

export const selectTransactions = createFeatureSelector<ITransactionState>(transactionFeatureKey)
export const selectAllTransactions = createSelector(selectTransactions, (state: ITransactionState) => state.transactionState) 

//#1 therse are called projectors
//#2 Create selector can take up to 8 projector interfaces
//you may create selectors without projectors and this will return a dictionary
// result type - { books: Book[]; query: string }
// const selectBooksPageViewModel = createSelector({
//     books: selectBooks, // result type - Book[]
//     query: selectQuery, // result type - string
//   });
//you can remove the memorised value from memory by using t.ex selectAllTransactionStates.release(), if you release a selector
//all of its ancestors will also be released so selectBrTransactions will also release selectAllTrans... => null

