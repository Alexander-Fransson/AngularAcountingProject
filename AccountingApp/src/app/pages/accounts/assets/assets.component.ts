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
  showAddForm: boolean = false
  buttonAction: string = "Add"

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {

      this.transactions = transactions
      this.debit = this.transactions.filter(transaction => transaction.amount > 0 && transaction.report == "BR")
      this.credit = this.transactions.filter(transaction => transaction.amount < 0 && transaction.report == "BR")
    })
  }

  toggleAddForm(){
    this.showAddForm = !this.showAddForm
    if(this.showAddForm){
      this.buttonAction = "Close"
    }
    else{
      this.buttonAction = "Add"
    }
  }

  onAddedTransaction(newTransaction: ITransaction){
    this.transactionService.addTransaction(newTransaction).subscribe((newTransaction) => {

      this.transactions.push(newTransaction)
      this.debit = this.transactions.filter(transaction => transaction.amount > 0 && transaction.report == "BR")
      this.credit = this.transactions.filter(transaction => transaction.amount < 0 && transaction.report == "BR")
    })
  }

  onTransactionDeletion(deathrowTransaction: ITransaction){
    this.transactionService.deleteTransaction(deathrowTransaction).subscribe(() => {
      this.ngOnInit()
    })
  }
}
