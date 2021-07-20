import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:any;
  password:any;
  message=''
  
  pid='errid'
  loginFn(){
    if(this.username=="asfina" && this.password=="1234"){
      this.message='login success'
    }else{
      this.message='invalid login!'
    }
    
  }
  

}
