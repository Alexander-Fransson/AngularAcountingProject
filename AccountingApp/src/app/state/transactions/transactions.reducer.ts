import { createReducer, on } from "@ngrx/store";
import { updateTransaction, deleteTransaction, getTransaction } from "./transactions.actions";
import { ITransaction } from "src/app/ITransaction";

export const transactionState:ITransaction[] = [
      {
        id: 2,
        happening: "Labour",
        amount: -60000,
        report: "RR",
        date: new Date(),
      },
      {
        id: 3,
        happening: "Seed Investment",
        amount: -10000,
        report: "BR",
        date: new Date(),
      },
      {
        id: 4,
        happening: "Profit",
        amount: 70000,
        report: "RR",
        date: new Date(),
      },
      {
        id: 1,
        happening: "Savings",
        amount: 40000,
        report: "BR",
        date: new Date(),
      },
      {
        id: 5,
        happening: "I spent nothing, did nothing, never ventured nor gained",
        amount: -4,
        report: "BR",
        date: new Date(),
      },
      {
        happening: "Real Capital",
        amount: 40000000,
        report: "BR",
        date: new Date(),
        id: 6
      }
]

export const transactionReducer = createReducer(
    transactionState,
    on(updateTransaction, (state) => state),
    on(deleteTransaction, (state) => state),
    on(getTransaction, (state) => state)
)

