import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { President } from 'src/app/models/models';
import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  o: President;
  title = '';
  config = this._config;

  folderToSaveInServer = 'presidents';

  imageTo = new Subject();
  imageFrom = new Subject();

  eventSubmitFromParent = new Subject();

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService
    , private session: SessionService) { }

  ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.createForm();

    this.imageFrom.subscribe(r => this.myForm.get('imageUrl').setValue(r));

    setTimeout(() => {
      this.imageTo.next(this.o.imageUrl);
    }, 100);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: President): void {
    // console.log(o);
    if (o.id === 0) {
      o.id = null;
      this.uow.presidents.post(o).subscribe(r => {
        this.eventSubmitFromParent.next(true);
        this.dialogRef.close(o);
      });
    } else {
      this.uow.presidents.put(o.id, o).subscribe(r => {
        this.eventSubmitFromParent.next(true);
        this.dialogRef.close(o);
      });
    }
  }

  createForm() {
    this.myForm = this.fb.group({
      id: this.o.id,
      title: [this.o.title, Validators.required],
      description: [this.o.description],
      date: [this.o.date],
      imageUrl: [this.o.imageUrl],
      // idRegion: [this.session.user.idRegion, Validators.required],
      // idUser: [this.session.user.id, Validators.required],
    });
  }

  resetForm() {
    this.o = new President();
    this.createForm();
  }

  get _config(): AngularEditorConfig {
    return {
      editable: true,
      spellcheck: true,
      height: '20rem',
      minHeight: '5rem',
      placeholder: 'Discription ...',
      translate: 'no',
      uploadUrl: 'no',
      sanitize: false,
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ]
    };
  }

}
