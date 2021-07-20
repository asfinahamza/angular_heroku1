import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private client:HttpClient) {
    
   }

  dataInsert(data:any){
    
    return this.client.post('https://cybersquare.herokuapp.com/user/',data);
  }
  getData(){
    return this.client.get('https://cybersquare.herokuapp.com/user/');
  }
  delData(id:any){
    return this.client.delete('https://cybersquare.herokuapp.com/user/'+id);
  }
}
