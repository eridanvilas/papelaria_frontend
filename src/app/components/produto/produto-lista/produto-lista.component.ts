import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[] | undefined
  
  constructor(private produtoService : ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProduto().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos)
    })
  }

}
