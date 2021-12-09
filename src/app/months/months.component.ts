import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent {
  months:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  mes:number = 0;
  hijo:number = this.month();

  month():number{
    console.log(this.mes,"mes");
    return this.mes +=1;

  }

  deleteMonth():void{
    this.months.shift();
  }

}
