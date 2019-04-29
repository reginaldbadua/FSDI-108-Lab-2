import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsdi1';
  counter = 0;

  //method that is auto executed 
  //once the component is created
  constructor(){
    console.log('Im the constructor for the AppComponent');
    this.sayHello(); 
  }

  increaseCounter(){
    this.counter += 1;
  }
  
  sayHello(){
    var name = 'Reggie';
    console.log(name);

    var luckyNumber: number = 42; 
    var myName: string ="Reggie";
    var isValid: boolean = false; //true
    var anything: any = 'whatever';
    /*
    luckyNumber = [];
    myName = 42;
    isValid = 9;

    anything = 12;
    anything = false;
    anything =[];
    */
  }
    
}
