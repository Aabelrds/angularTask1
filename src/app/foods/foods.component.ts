import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {

  foods:string[] = ['Hamburger','Pizza', 'Pasta', 'Bacalhao','Espetada', 'Caldo Verde', 'Arepas','Paella'];

  deleteAllList():void{
    this.foods = [];
  }

}
