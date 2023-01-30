import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ITransaction } from "src/app/ITransaction";

//therse are called projectors
export const selectAllTransactionStates = (state: AppState) => state.allTransactions

//Create selector can take up to 8 projector interfaces
export const selectBrTransactions = createSelector(selectAllTransactionStates, (state:ITransaction[]) => state.filter(tra => tra.report === "BR"))
export const selectallTransactions = createSelector(selectAllTransactionStates, (state: ITransaction[]) => state)

//you may create selectors without projectors and this will return a dictionary
// result type - { books: Book[]; query: string }
// const selectBooksPageViewModel = createSelector({
//     books: selectBooks, // result type - Book[]
//     query: selectQuery, // result type - string
//   });

//you can remove the memorised value from memory by using t.ex selectAllTransactionStates.release(), if you release a selector
//all of its ancestors will also be released so selectBrTransactions will also release selectAllTrans... => null

