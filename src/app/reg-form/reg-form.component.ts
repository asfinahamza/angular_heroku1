import { Component, OnInit } from '@angular/core';
import { Register } from './reg-form.model';
import { DataserviceService } from '../services/dataservice.service'

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private serve:DataserviceService) { }

  ngOnInit(): void {
  }
  hide=true;
  res=new Register();
  
  insertFn(){
    // console.log(this.res);
    this.serve.dataInsert(this.res).subscribe(result=>{
      console.log(result)
    })
  }

}
