import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Platform} from 'ionic-angular';

/*
  Generated class for the DbServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbServiceProvider {

  sqlite: SQLite = new SQLite();
   sqliteObject:SQLiteObject ;

  constructor(public platform: Platform) {
    console.log('Hello DbproviderProvider Provider');
  
    this.platform.ready().then(() => {
      console.log("PLATFORM READY IN PROVIDER")
      this.init();
   })

  }

  init(){
    if(this.sqlite != null){
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
         this.sqliteObject = db;
         console.log("table creation start")
         this.createTables();
        
      });
    }
   
  }

  createTables(){
    this.sqliteObject.executeSql('CREATE TABLE IF NOT EXISTS User(Id INTEGER PRIMARY KEY, Name TEXT, Password TEXT, Email TEXT, ProfileURL TEXT )', {})
    .then(res => console.log('Executed SQL table creation'))
    .catch(e => console.log(e));
  }

  executeSqlQuery(query,params){

   return this.sqliteObject.executeSql(query,params)
    .then(res => {
      return res;
    })
    .catch(e => {console.log("error sql")
      console.log(e.message);});
  }

  // executeSqlQuery(query,params){
  //   console.log("execute query 2");


  // return new Promise((resolve,reject)=>{
  //    this.sqlite.create({
  //     name: 'ionicdb.db',
  //     location: 'default'
  //    }).then((db:SQLiteObject)=>{
  //       db.executeSql(query,params).then((res: any)=>{
  //       //  res.rows.length;
  //         debugger;
  //         var k;
  //         var users = new Array<User>();
  //         for(k=0;k<res.rows.length;k++){
        
  //           alert(res.rows.item(k).Name);
  //            users.push(
  //             {
  //              id 			    : res.rows.item(k).Id,
  //              name 			  : res.rows.item(k).Name,
  //              password 	  : res.rows.item(k).Password
  //             })
          
  //         }
  //         resolve(users);
  //       })
  //       .catch(e=>{
  //         reject(e);
  //       })
  //    }).catch(e=>{
  //       reject(e)
  //    })
  // });
 
  // }

}
