import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { DetailMessageComponent } from './detail/detail.component';
import { ImgUploadModule } from 'src/app/img-upload/img-upload.module';
import { MessageRoutingModule } from './contact-routing.module';
import { MessageComponent } from './contact.component';


@NgModule({
  declarations: [
    MessageComponent, 
    DetailMessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    ImgUploadModule,
  ],
  entryComponents: [
    DetailMessageComponent
  ]
})
export class MessageModule { }
