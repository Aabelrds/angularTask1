import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent{

  flowers:string[]= ['Tulipanes','Margaritas','Rosas','claveles','Girasol','Orquidea','Azucena','Lavanda' ];

  deleteAllList(): void{
    this.flowers = [];
  }
}
