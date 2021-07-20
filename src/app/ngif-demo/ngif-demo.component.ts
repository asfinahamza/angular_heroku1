import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.css']
})
export class NgifDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  home=true;
  contact=false;
  about=false;
  homeFunction(){
    this.home=true;
    this.contact=false;
    this.about=false
  }
  contactFunction(){
    this.home=false;
    this.contact=true;
    this.about=false;
  }
  aboutFunction(){
    this.home=false;
    this.contact=false;
    this.about=true;
  }

}
