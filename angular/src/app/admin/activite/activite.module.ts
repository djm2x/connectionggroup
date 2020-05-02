import { UpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { ActiviteComponent } from './activite.component';
import { ActiviteRoutingModule } from './activite-routing.module';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [ActiviteComponent, UpdateComponent],
  imports: [
    CommonModule,
    ActiviteRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    ManageFilesModule,
    AngularEditorModule,
  ],
  entryComponents: [
    UpdateComponent
  ]
})
export class ActiviteModule { }
