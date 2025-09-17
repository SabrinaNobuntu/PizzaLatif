import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioFormComponent } from './cardapio-form/cardapio-form.component'; 
import { ListCardapioComponent } from './list-cardapio/list-cardapio.component'; 


const routes: Routes = [
  { path: '', component: ListCardapioComponent}, 
  { path: 'new', component: CardapioFormComponent}, 
  { path: ':id/edit', component: CardapioFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CardapioRoutingModule { }
