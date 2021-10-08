import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: 0
  }

  constructor(private produtosService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  criarProduto(): void {
    this.produtosService.criar(this.produto).subscribe(() => {
        this.produtosService.showMessage("Produto criado com Sucesso!")
        this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
