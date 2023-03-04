import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../Services/data.service';
import { LoggingService } from '../Services/logging.service';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService],
})
export class AccountComponent implements OnInit {
  @Input()name:string;
  @Input()status:string;
  @Input()id:number;
  // @Output()status1=new EventEmitter<{id:number,newStatus:string}>()
  constructor(private loggingservice:LoggingService,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  statusChange(status){
    // this.status1.emit(
    //   {
    //     id:this.id,
    //     newStatus:status,
    //   }
    // )
    // this.loggingservice.logStatus(status);
    this.dataservice.updateStatus(this.id,status);
    this.dataservice.StatusChange.emit(status)
  }

}
