import { UowService } from 'src/app/services/uow.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  o: User;
  title = '';
  // roles = this.uow.roles.get();
  hide = true;

  regions = this.uow.regions.get();
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
  , private fb: FormBuilder, public uow: UowService) { }

  ngOnInit() {

    this.o = this.data.model;
    this.title = this.data.title;
    // console.log(this.o)
    this.o.date = new Date(this.o.date);
    this.createForm();
    // setTimeout(() => this.createForm(), 300);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: User): void {
    o.date = this.uow.valideDate(o.date);
    // console.log(o);
    this.dialogRef.close(o);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: this.o.id,
      nom: [this.o.nom, Validators.required],
      prenom: [this.o.prenom],
      date: [this.o.date],
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, Validators.required],
      phone: [this.o.phone],
      adresse: [this.o.adresse],
      cin: [this.o.cin],
      organisation: [this.o.organisation],
      role: [this.o.role, Validators.required],
      idRegion: [this.o.idRegion, Validators.required],
      isActive: [this.o.isActive, Validators.required],
    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

}
