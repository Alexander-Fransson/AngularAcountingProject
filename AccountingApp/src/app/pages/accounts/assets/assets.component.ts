import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/ITransaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  transactions: ITransaction[] = []
  debit: ITransaction[] = []
  credit: ITransaction[] = []

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {
      transactions.forEach(transaction => {

        if(transaction.report == "BR"){
          
          if(transaction.amount > 0){
            this.debit.push(transaction)
          }
          else if(transaction.amount < 0){
            this.credit.push(transaction)
          }
        }
      })
    })
  }
}
