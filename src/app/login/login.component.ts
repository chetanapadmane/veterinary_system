import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  isRegister: boolean;

  login: any;
  register: any;

  constructor() { }

  ngOnInit() {
    this.login = {
      username: '',
      password: ''
    };
  }

  setLoginRegister(option: string) {
    if (option === 'login') {
      this.isLogin = true;
      this.isRegister = false;
    } else if (option === 'register') {
      this.isLogin = false;
      this.isRegister = true;
    }
    this.login = {
      username: '',
      password: ''
    };
    this.register = {
      email: '',
      username: '',
      password: ''
    };
  }

  onLoginClick() {
    console.log(this.login);
  }

  onRegisterClick() {
    console.log(this.register);
  }
}
