import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaFormComponent } from './entrega-form/entrega-form.component'; 
import { ListEntregaComponent } from './list-entrega/list-entrega.component'; 


const routes: Routes = [
  { path: '', component: ListEntregaComponent}, 
  { path: 'new', component: EntregaFormComponent}, 
  { path: ':id/edit', component: EntregaFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EntregaRoutingModule { }
