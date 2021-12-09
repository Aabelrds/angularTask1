import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonthsComponent } from './months/months.component';
import { DaysComponent } from './days/days.component';
import { FlowersComponent } from './flowers/flowers.component';
import { TownsComponent } from './towns/towns.component';
import { FoodsComponent } from './foods/foods.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    DaysComponent,
    FlowersComponent,
    TownsComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
