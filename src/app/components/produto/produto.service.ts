import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  baseUrl = environment.api

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl + "/produtos", produto)
  }

  getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "/produtos")
  }


  getProdutoById(id: string): Observable<Produto> {
    const url = this.baseUrl + "/produtos/" + id;
    return this.http.get<Produto>(url)
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const url = this.baseUrl + "/produtos/" + produto.id;
    return this.http.put<Produto>(url, produto)
  }

  deletarProduto(id: string): Observable<Produto> {
    const url = this.baseUrl + "/produtos/" + id;
    return this.http.delete<Produto>(url)
  }

}
