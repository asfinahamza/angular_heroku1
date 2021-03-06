import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
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
    this.showData()
    console.log(this.data);
    })
  }
  deleteData(i:any){
    console.log(i);
    this.pass.delData(i).subscribe(r=>{
      alert(r);
      this.showData();
      
      })

  }
 
}
