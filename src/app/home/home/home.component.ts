import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
public color='black';
displayName=true;
// @Input('parentData') public name ;
@Input() childMessage: string;
@Output() firstName :EventEmitter <any> =new EventEmitter <any>()

arr=['red','black','green'];
  ngOnInit() {
  }


  getFirstName(name:any):void{
    this.firstName.emit(name);
  }



}
