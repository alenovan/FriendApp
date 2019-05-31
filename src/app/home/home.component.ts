import { AuthService } from './../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }
  
  get formControls() { return this.loginForm.controls; }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.AuthService.login(this.loginForm.value);
    this.router.navigateByUrl('/friend');

  }


}
