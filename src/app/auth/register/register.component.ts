import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [true, Validators.required]
    })
  }

  get lastname() {
    return this.registerForm.get('lastname')
  }

  get firstname() {
    return this.registerForm.get('firstname')
  }

  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }

  get dob() {
    return this.registerForm.get('dob')
  }

  get gender() {
    return this.registerForm.get('gender')
  }

  onRegister() {

  }
}
