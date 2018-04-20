import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Vehicle} from '../../model/Vehicle'
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';

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

  // getVehicles() {
  //   console.log("Get Vehicles");
  //   debugger;
  //   return new Promise((resolve,reject) => {
  //     this.http.get(this.baserURL+ this.vehiceleListEndpoint ,{ 
  //       headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  //       params: new HttpParams().set('query1', '1'),
  //     } ).subscribe(data => {
  //        console.log(data);
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //       reject(err);
  //     });
  //   });

  // }


  public getVehicles() : Observable<Vehicle[]>{
    console.log(this.baserURL+this.vehiceleListEndpoint);
    return this.http.get<Vehicle[]>(this.baserURL+this.vehiceleListEndpoint,{ 
     
      //params: new HttpParams().set('query1', '1'),
    }).pipe(tap(vehicles=>console.log("Fetched Vehicles")),catchError(this.handleError('getVehicles',[])));
  }
   
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("API Error Occurred");
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  
}
