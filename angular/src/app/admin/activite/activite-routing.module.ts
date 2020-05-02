import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiviteComponent } from './activite.component';



const routes: Routes = [
  { path: 'region', redirectTo: '', pathMatch: 'full'},
  { path: '', component: ActiviteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiviteRoutingModule { }
