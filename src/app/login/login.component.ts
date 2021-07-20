import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public myname='asfina' // interpolation (public keyword is optional)
  myid='testid'
  testvar = true
  testFun(){
    // console.log('hiiii')
    this.testvar = false
  }
  favcolor:any
  ngmodel1:any
  
  printText(){
    console.log(this.favcolor)
  }


  setDisplay=false;

}

