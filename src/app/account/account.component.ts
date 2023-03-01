import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input()name:string;
  @Input()status:string;
  @Input()id:number;
  @Output()status1=new EventEmitter<{id:number,newStatus:string}>()
  constructor() { }

  ngOnInit(): void {
  }
  statusChange(status){
    this.status1.emit(
      {
        id:this.id,
        newStatus:status,
      }
    )
  }

}
