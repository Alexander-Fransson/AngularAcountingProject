import { createSelector, createFeatureSelector } from "@ngrx/store";
import { IResultReport } from "../app.state";
import { RESULT_REPORT_FEATURE_KEY } from "./resultreport.reducer";

export const selectResultReport = createFeatureSelector<IResultReport>(RESULT_REPORT_FEATURE_KEY)

export const resultSelector = {
    selectPositiveResult: createSelector(selectResultReport, (state: IResultReport) => {
        return state.positveBalance
    }),
    selectNegativeresult: createSelector(selectResultReport, (state: IResultReport) => {
        return state.negativeBalance
    })
}