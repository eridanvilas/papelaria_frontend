import { Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { DeletarProdutoDialogComponent } from '../deletar-produto-dialog/deletar-produto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos!: Produto[];
  displayedColumns = ['id', 'nome', 'preco', 'action']

  constructor(private produtoService: ProdutoService,
    private dialog: MatDialog, private router: Router, private headerService: HeaderService) {
      headerService.headerData = {
        title: "Lista de Produtos",
        icon: 'storefront',
        routeUrl: '/produtos'
      }
  }

  ngOnInit(): void {
    this.produtoService.getProduto().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  deletarProduto(id: string): void {

    const dialogRef = this.dialog.open(DeletarProdutoDialogComponent);

    var confirm;

    dialogRef.afterClosed().subscribe(result => {
      confirm = result;
      if (confirm) {
        this.produtoService.deletarProduto(id).subscribe(() => {
          this.produtoService.showMessage("Produto deletado com Sucesso!")
          this.ngOnInit();
        });
      }
    });
  }

}
