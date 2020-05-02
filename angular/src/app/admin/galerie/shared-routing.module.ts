import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';



const routes: Routes = [
  { path: 'galerie', redirectTo: '', pathMatch: 'full'},
  { path: '', component: SharedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
