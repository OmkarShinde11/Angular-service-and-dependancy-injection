import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { serverInfo } from 'src/assets/serverInfo';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  accountName:string;
  accountStatus:string;

 @Output()sendData=new EventEmitter<{name:string,status:string}>();
  constructor() { }

  ngOnInit(): void {
  }
  sendInfo(){
    this.sendData.emit(
      {
        name:this.accountName,
        status:this.accountStatus,
      }
    )
    
  }

}
