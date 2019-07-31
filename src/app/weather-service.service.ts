import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { WeatherModel } from './weather-model';

@Injectable({
	providedIn: 'root'
})
export class WeatherServiceService {

	constructor(private http: HttpClient) {
	}
	
	search(city: string): Observable<WeatherModel> {
		return this.http.get('weather?q='+ city +'&APPID=17cbd8997a445969701cdf81ac55170f&units=metric') as Observable<WeatherModel>;
	}

}
