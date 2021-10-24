import { Component, Input, OnInit } from '@angular/core';
import { Login } from 'src/app/modelos/login';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginS = false;
  public registerS = false;
  public login: Login;

  userEmail = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  constructor(private router: Router) {
    this.login = new Login();
  }

  ngOnInit(): void {
  }

  get tEmail(){
    return this.userEmail.get('email');
  }

  submit() {
    console.log(this.login.usuario + ", " + this.login.contrasenna);
    this.loginS = true;
    setTimeout(() => { this.router.navigate(['/personal-zone']).then(() => {window.location.reload()}) }, 1000);
  }

}
