import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _matDialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.loginF()
  }

  loginF() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  onLogin() {

  }

  register() {
    let dialogRef = this._matDialog.open(RegisterComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe();
  }

}
