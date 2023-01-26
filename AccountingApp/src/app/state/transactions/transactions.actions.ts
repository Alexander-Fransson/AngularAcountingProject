import { createAction, props } from '@ngrx/store'
import { ITransaction } from 'src/app/ITransaction'

export const updateTransaction = createAction(
    '[Transaction Component] UpdateTransaction',
    props<ITransaction>()
)
export const deleteTransaction = createAction('[Transaction Component] DeleteTransaction')
export const getTransaction = createAction('[Transaction Component] GetTransaction')