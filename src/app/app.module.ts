import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule} from '@angular/router';
import {allAppRoutes} from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
