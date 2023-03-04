import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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

  StatusChange=new EventEmitter<string>();
  constructor(private loggingservice:LoggingService) { }

  addAccount(accountname:string,accountstatus:string){
    this.serverStatus.push({name:accountname,status:accountstatus})
    this.loggingservice.logStatus("The initial Acount Status is "+ accountstatus)
  }
  updateStatus(id:number,newStatus:string){
    this.serverStatus[id].status=newStatus;
    this.loggingservice.logStatus("The Change Account the Status is "+ newStatus)
  }
}
