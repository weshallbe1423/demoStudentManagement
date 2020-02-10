import { Component, Output, AfterViewInit, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TestComponent,{static:false}) testReference ;

  title = 'angular-lazy-loading';
  public name='vishal'
   parentMessage='Hi this is from parent'
   exampleParent:string;
   exampleParentAgain:string;

  public exampleMethodParent($event):void {
      this.exampleParent=$event
}

ngAfterViewInit(){
  this.exampleParentAgain=this.testReference.childMessageAgain;
}
}
