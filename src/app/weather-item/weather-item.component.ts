import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() item: WeatherModelInternal;
  constructor() { }

  ngOnInit() {
  }

}
