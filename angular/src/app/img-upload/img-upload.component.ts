import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  imgUrl = 'assets/courses.png';
  @Input() eventFoto = new EventEmitter<string>();
  @Input() width = '200';
  @Input() height = '200';
  @Input() text = '';
  @Input() folder = '';
  @Input() showButton = true;
  // colorInputFile = '';
  // @Output() file: File;
  // send object to be edited to parent component
  @Output() eventToParent = new EventEmitter<File>();

  constructor(@Inject('BASE_URL') private url: string) { }

  ngOnInit() {
    this.eventFoto.subscribe((f: string) => {
      console.warn(f);
      if (f !== null && f.startsWith('http')) {
        this.imgUrl = f;
      } else if (!f) {
        this.imgUrl = 'assets/404.jpg';
      } else {
        this.imgUrl = `${this.url}/${this.folder}/${f}`;
      }
    });
    // console.log(this.photoUrl);
    // this.imgUrl = this.url + '/user/' + this.imgUrl;
  }

  openInput(o/*: HTMLInputElement*/) {
    o.click();
  }

  handleFileInput(files: FileList) {
    this.eventToParent.next(files.item(0));

    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imgUrl = reader.result.toString();
      // this.colorInputFile = '';
    };

    reader.readAsDataURL(files.item(0));
  }


  imgError(img: any) {

    img.src = 'assets/courses.png';
  }

}
