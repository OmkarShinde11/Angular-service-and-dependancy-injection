import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../Services/data.service';
import { LoggingService } from '../Services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @ViewChild('accountName')accountName:ElementRef;
  @ViewChild('accountStatus')accountStatus:ElementRef;

//  @Output()sendData=new EventEmitter<{name:string,status:string}>();
  constructor(private loggingservice:LoggingService,private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.StatusChange.subscribe((status:string)=>{
      alert('The Status Change '+status)
    })
  }
  sendInfo(){
    // this.sendData.emit(
    //   {
    //     name:this.accountName.nativeElement.value,
    //     status:this.accountStatus.nativeElement.value,
    //   }
    // )
    this.dataservice.addAccount(this.accountName.nativeElement.value,this.accountStatus.nativeElement.value);
    
    
  }

}
