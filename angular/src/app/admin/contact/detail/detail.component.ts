import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject, AfterContentInit, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailMessageComponent implements OnInit, AfterContentInit {
  myForm: FormGroup;
  o: any;
  title = '';

  circuit: any;

  myAuto = new FormControl('');
  filteredOptions: Observable<any>;
  eventFoto = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private uow: UowService) { }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    this.o = this.data.model;
    this.title = this.data.title;
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: any): void {
    this.dialogRef.close(o);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: this.o.id,
      name: [this.o.name],
      email: [this.o.email],
      message: [this.o.message],
      phone: [this.o.phone],
    });
  }

}
