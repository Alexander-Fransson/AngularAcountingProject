import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { balanceReducer, BALANCE_REPORT_FEATURE_KEY } from "./balancereport.reducer";
import { BalanceEffects } from "./balancereport.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    imports: [
        StoreModule.forFeature(BALANCE_REPORT_FEATURE_KEY, balanceReducer),
        EffectsModule.forFeature([BalanceEffects]),
    ] 
})

export class BalanceModuel {}