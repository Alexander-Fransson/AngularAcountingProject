import { createReducer, on } from "@ngrx/store";
import * as TransactionActions from "./transactions.actions"
import { ITransactionState } from "../app.state";

/****************************************************************************************
Here states specific to the page, unrelated to the server are stored and centraly managed
Right now I have no need for the handeling of page state outside of components so the 
functions here are purely experimental.
****************************************************************************************/

export const transactionFeatureKey = 'transaction'

export const transactionState:ITransactionState = {
  transactionState: []
}

export const transactionReducer = createReducer(
    transactionState, 
    on(TransactionActions.getTransactions, (state, { loadedTransactions }) => ({...state, transactionState: loadedTransactions}))
)

