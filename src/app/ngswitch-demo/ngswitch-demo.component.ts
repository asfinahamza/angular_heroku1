import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colour="red"
  // assignment
  favcolor:any
  

  // ngfor..
  studentList = ['asfi','soha','minnu','ammu']
  students=[
    {'name':'rani','age':3,'contact':567},
    {'name':'asfi','age':28,'contact':568887},
    {'name':'manu','age':43,'contact':77787},
    {'name':'minnu','age':73,'contact':56007},
  ]
  delete(x:any){
    this.students.splice(x,1)
  }
}
