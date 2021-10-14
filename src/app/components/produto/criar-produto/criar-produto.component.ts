import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';

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
    private router: Router, private headerService : HeaderService) { 
      headerService.headerData = {
        title: "Cadastrar Produto",
        icon: 'storefront',
        routeUrl: '/produtos'
      }
    }

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
