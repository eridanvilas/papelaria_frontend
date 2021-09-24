import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoComponent } from "./views/produto/produto.component";
import { HomeComponent } from './views/home/home.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  }, 
  {
    path: "produtos",
    component: ProdutoComponent
  },
  {
    path:"produtos/criar",
    component: CriarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
