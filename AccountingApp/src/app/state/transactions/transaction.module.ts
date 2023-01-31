import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { transactionReducer, transactionFeatureKey } from "./transactions.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature(transactionFeatureKey, transactionReducer)
    ],
})

export class TransactionModule {}