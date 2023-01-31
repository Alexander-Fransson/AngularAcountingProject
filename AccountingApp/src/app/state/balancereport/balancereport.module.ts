import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { balanceReducer, BALANCE_REPORT_FEATURE_KEY } from "./balancereport.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature(BALANCE_REPORT_FEATURE_KEY, balanceReducer)
    ] 
})

export class BalanceModuel {}