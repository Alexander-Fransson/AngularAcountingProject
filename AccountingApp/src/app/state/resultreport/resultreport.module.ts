import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { resultReducer, RESULT_REPORT_FEATURE_KEY } from "./resultreport.reducer";
import { ResultEffects } from "./resultreport.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    imports: [
        StoreModule.forFeature(RESULT_REPORT_FEATURE_KEY, resultReducer),
        EffectsModule.forFeature([ResultEffects])
    ]
})

export class ResultModule {}