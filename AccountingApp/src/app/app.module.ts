import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AssetsComponent } from './pages/accounts/assets/assets.component';
import { AccountsComponent } from './pages/accounts/accounts/accounts.component';
import { ReportsComponent } from './pages/reports/reports/reports.component';
import { TransctionComponent } from './pages/accounts/transction/transction.component';
import { ButtonComponent } from './pages/accounts/button/button.component';

const appRoutes: Routes = [
  {path: '', component: AccountsComponent},
  {path: 'reports', component: ReportsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AccountsComponent,
    ReportsComponent,
    TransctionComponent,
    ButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
