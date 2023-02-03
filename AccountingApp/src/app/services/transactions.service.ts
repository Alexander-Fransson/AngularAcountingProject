import { Injectable,  } from '@angular/core';
import { ITransaction } from '../ITransaction';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl = 'http://localhost:5000/transactions'
  private transactions: ITransaction[] = [] 

  constructor(private http:HttpClient) { }

  getTransactions(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(this.apiUrl)
  }

  addTransaction(newTransaction: ITransaction): Observable<ITransaction>{
    return this.http.post<ITransaction>(this.apiUrl, newTransaction, httpOptions)
  }

  updateTransaction(updatedTransaction: ITransaction): Observable<ITransaction>{
    const url = `${this.apiUrl}/${updatedTransaction.id}`
    return this.http.put<ITransaction>(url, updatedTransaction, httpOptions)
  }

  deleteTransaction(deathrowTransactionId:String){
    const url = `${this.apiUrl}/${deathrowTransactionId}`
    this.http.delete<ITransaction>(url).subscribe()
    return of({id: deathrowTransactionId});
  }
}
