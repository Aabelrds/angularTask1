import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.css']
})
export class TownsComponent {

  cities:string[] = ['Caracas','Barcelona','Lisboa', 'Funchal','Paris', 'Londres'];
  show:boolean = false;
  deletedCities:any = [];

  showCities():void{

    this.show === false ? this.show = true : this.show = false;
  }

  deleteCity():void{
    let deletedCity = this.cities.shift();
    this.deletedCities.push(deletedCity);
  }

}
