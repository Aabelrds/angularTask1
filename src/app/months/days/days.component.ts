import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {

  days:number[] = [];
  setDay:number[] = this.pushAday();

  pushAday(){

    for (let i = 0; i < 32; i++) {

      this.days.push(i);

    }
    return this.days;
  }

  deleteMonth():void{

    this.days.pop();
  }


}
