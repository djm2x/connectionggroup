import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgUploadComponent } from './img-upload.component';
import { MatModule } from '../mat.module';



@NgModule({
  declarations: [ImgUploadComponent],
  imports: [
    CommonModule,
    MatModule,
  ],
  exports: [
    ImgUploadComponent,
    // TranslateModule,
    
  ]
})
export class ImgUploadModule { }
