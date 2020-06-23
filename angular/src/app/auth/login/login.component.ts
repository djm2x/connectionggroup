import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { SnackbarService } from 'src/app/shared/snakebar.service';
import { User } from 'src/app/models/models';
import { SnackBarService } from 'src/app/loader/snack-bar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: anime
})
export class LoginComponent implements OnInit, OnDestroy {
  // for test
  displayedColumns: string[] = ['email', 'password', 'profil'];
  dataSource = [
    { email: 'fatima@angular.io', password: '123', profil: 'Administrateur' },
    { email: 'manager@angular.io', password: '123', profil: 'Manager' },
    { email: 'com@angular.io', password: '123', profil: 'Commercial' },
    // {email: 'ahmed@angular.io', password: '123', profil: 'Propriétaire'},
  ];

  // end test
  myForm: FormGroup;
  o = new User();
  hide = true;
  constructor(private fb: FormBuilder, private uow: UowService
    , private router: Router, public session: SessionService
    , private snack: SnackBarService) { }

  async ngOnInit() {
    // test
    if (!environment.production) {
      this.o.email = 'admin@gmail.com';
      this.o.password = '123@pup';
    }
    this.createForm();

    // this.uow.accounts.sanctumCsrf().subscribe(r => {
    //   console.log(r)
    // })
  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
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

  submit(myForm) {
    // console.log(myForm.value);
    const o = myForm.value;
    // this.snackbar.openMySnackBar('login...');
    // console.log(o);
    this.uow.accounts.login(o).subscribe((r: Res) => {


      // console.log(r);
      // return;

      if (r.code === -1) {
        this.snack.notifyAlert(`Votre email est incorrect`);
      } else if (r.code === 0) {
        this.snack.notifyAlert(`Votre mot de pass est incorrect`);
      } else {
        this.snack.notifyOk(`Binevenue ${r.user.nom}`);
        this.session.doSignIn(r.user, r.token, r.user.role);
        setTimeout(() => this.router.navigate(['/admin']), 500);
      }

      // this.router.navigate(['/admin']);
      // if (r) {
      //   this.checkbox.value ? r.rememberMe = 1 : r.rememberMe = 0;
      //   this.session.doSignIn(r);
      //   this.router.navigate(['/concern']);
      //   this.snackbar.dismiss();
      // } else {
      //   this.snackbar.dismiss();
      // }
    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}

interface Res {
  user: User;
  token: string;
  code: number;
}
