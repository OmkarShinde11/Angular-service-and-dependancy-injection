import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  serverStatus=[
    {
      name:'Test',
      status:'inactive'
    },
    {
      name:'Test-1',
      status:'active'
    },
  ]

  accept(data:{name:string,status:string}){
    this.serverStatus.push(data);
  }
  changes(newData:{id:number,newStatus:string}){
    this.serverStatus[newData.id].status=newData.newStatus
  }
}



