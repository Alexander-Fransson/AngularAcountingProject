import { createAction, props } from '@ngrx/store'
import { ITransaction } from 'src/app/ITransaction'

export const addTransaction = createAction('[Transaction Component] addTransaction', props<ITransaction>())
export const updateTransaction = createAction('[Transaction Component] UpdateTransaction', props<ITransaction>())
export const deleteTransaction = createAction('[Transaction Component] DeleteTransaction', props<ITransaction>())
export const loadTransactions = createAction('[Transaction Component] loadTransaction')