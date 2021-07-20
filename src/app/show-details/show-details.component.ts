import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private pass:DataserviceService) { }

  ngOnInit(): void {
    this.showData();
  }
  data:any
  showData(){
    this.pass.getData().subscribe(res=>{
    this.data=res;
    console.log(this.data);
    })
  }

}
