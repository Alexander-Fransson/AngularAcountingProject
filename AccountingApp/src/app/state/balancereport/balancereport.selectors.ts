import { createSelector, createFeatureSelector } from "@ngrx/store";
import { IBalanceReport } from "../app.state";
import { BALANCE_REPORT_FEATURE_KEY } from "./balancereport.reducer";

const selectBalanceReport = createFeatureSelector<IBalanceReport>(BALANCE_REPORT_FEATURE_KEY)

export const balanceSelector = {
    selectPositiveBalance: createSelector(selectBalanceReport, (state: IBalanceReport) => {
        return state.positveBalance
    }),
    selectNegtiveBalance: createSelector(selectBalanceReport, (state: IBalanceReport) => {
        return state.negativeBalance
    }) 
} 