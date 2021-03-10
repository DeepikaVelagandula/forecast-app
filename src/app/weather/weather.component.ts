import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) {
  }
  weatherSearchForm: FormGroup;
  weatherData: any;
  noDataFound: any;

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU() {
    let test = this.weatherSearchForm.getRawValue();
    this.apixuService
      .getWeather(test.location)
      .subscribe(data => {
        this.weatherData = data;
        this.noDataFound = undefined;
      },
        err => {
          this.noDataFound = err;
          this.weatherData = undefined
        });
  }

}
