import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
