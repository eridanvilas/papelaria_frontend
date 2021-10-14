import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

  produto!: Produto;

  constructor(private produtosService: ProdutoService,
    private router: Router, private route: ActivatedRoute, private headerService: HeaderService) {
      headerService.headerData = {
        title: "Editar Produto",
        icon: 'storefront',
        routeUrl: '/produtos'
      }
     }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.produtosService.getProdutoById(id!).subscribe(produto => {
      this.produto = produto;
    });
  }

  editarProduto(): void {
    this.produtosService.updateProduto(this.produto).subscribe(() => {
      this.produtosService.showMessage("Produto editado com Sucesso!")
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }
}
