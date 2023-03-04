import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[DataService]
})

export class AppComponent implements OnInit {
  title = 'services';
  // serverStatus=[
  //   {
  //     name:'Test',
  //     status:'inactive'
  //   },
  //   {
  //     name:'Test-1',
  //     status:'active'
  //   },
  // ]
  serverStatus:{name:string;status:string}[]=[]

  constructor(private dataservice:DataService){

  }

  // accept(data:{name:string,status:string}){
  //   this.serverStatus.push(data);
  // }
  // changes(newData:{id:number,newStatus:string}){
  //   this.serverStatus[newData.id].status=newData.newStatus
  // }

  ngOnInit(): void {
    this.serverStatus=this.dataservice.serverStatus
  }

}



