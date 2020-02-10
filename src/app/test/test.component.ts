import {EventEmitter, Component, OnInit, Input, Output } from '@angular/core';

import { stringify } from 'querystring';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
 @Input() childMessageFrom:string;


@Output() exampleOutput  =new EventEmitter ();
childMesage:string="Hi i m child" 
childMessageAgain="message using view child"

childMethod(){
  this.exampleOutput.emit(this.childMesage);
 }
  ngOnInit() {
  }

}
