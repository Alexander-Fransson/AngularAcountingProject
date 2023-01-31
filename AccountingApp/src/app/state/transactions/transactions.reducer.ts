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
  transactionState: [
      {
        id: "2",
        happening: "Slavery",
        amount: -60000,
        report: "RR",
        date: new Date(),
      },
      {
        id: "3",
        happening: "Ransom",
        amount: -10000,
        report: "BR",
        date: new Date(),
      },
      {
        id: "4",
        happening: "Raiding Booty",
        amount: 70000,
        report: "RR",
        date: new Date(),
      },
      {
        id: "1",
        happening: "Moms credit card",
        amount: 40000,
        report: "BR",
        date: new Date(),
      },
      {
        id: "5",
        happening: "Entertainment",
        amount: -4,
        report: "BR",
        date: new Date(),
      },
      {
        happening: "Winning the lottery",
        amount: 40000000,
        report: "BR",
        date: new Date(),
        id: "6"
      }
]}

export const transactionReducer = createReducer(
    transactionState, 
    on(TransactionActions.getTransactions, (state) => ({...state, transactionState: [...state.transactionState, {
      id: "§",
      happening: "Costa concordia",
      amount: 45,
      report: "BR",
      date: new Date()
  } ]}))
)

