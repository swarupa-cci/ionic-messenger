import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  baserURL = "https://private-c07c0-testapi3304.apiary-mock.com/"
  vehiceleListEndpoint = "vehicles";

  constructor(public http: HttpClient) {
    debugger;
    console.log('Hello WebserviceProvider Provider');
  }

  getVehicles() {
    console.log("Get Vehicles");
    debugger;
    return new Promise((resolve,reject) => {
      this.http.get(this.baserURL+ this.vehiceleListEndpoint ,{ 
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        params: new HttpParams().set('query1', '1'),
      } ).subscribe(data => {
         console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
        reject(err);
      });
    });

  }
}
