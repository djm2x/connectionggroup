import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { SnackbarService } from 'src/app/shared/snakebar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  myForm: FormGroup;
  o = new User();
  hide = true;
  regions = this.uow.regions.get();
  constructor(private fb: FormBuilder, private uow: UowService
    , private router: Router, public session: SessionService
    , private snackbar: SnackbarService) { }

  async ngOnInit() {
    // test
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      id: this.o.id,
      nom: [this.o.nom, Validators.required],
      prenom: [this.o.prenom],
      email: [this.o.email, [Validators.required, Validators.email]],
      date: [this.o.date],
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

  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }

  get emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get passwordError() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  submit(o: User) {
    // o.date = this.uow.valideDate(o.date);
    // this.uow.accounts.register(o).subscribe((r: any) => {
    //   // this.session.doSignIn(r.user, r.token, r.idRole);

    //   this.router.navigate(['/auth/login']);
    // });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }
}
