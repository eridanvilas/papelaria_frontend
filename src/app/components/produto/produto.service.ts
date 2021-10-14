import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produto.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  baseUrl = environment.api

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl + "/produtos", produto).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "/produtos").pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  getProdutoById(id: string): Observable<Produto> {
    const url = this.baseUrl + "/produtos/" + id;
    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const url = this.baseUrl + "/produtos/" + produto.id;
    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deletarProduto(id: string): Observable<Produto> {
    const url = this.baseUrl + "/produtos/" + id;
    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  errorHandler(e: any): Observable<any> {
    console.log("Error:" + e)
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

}
