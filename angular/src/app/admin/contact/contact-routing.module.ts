import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './contact.component';



const routes: Routes = [
  { path: 'message', redirectTo: '', pathMatch: 'full'},
  { path: '', component: MessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
