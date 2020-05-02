import { UpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ManageFilesModule } from 'src/app/manage-files/manage-files.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [SharedComponent, UpdateComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
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
export class SharedModule { }
