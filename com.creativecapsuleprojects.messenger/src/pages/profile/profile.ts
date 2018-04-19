import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../model/user'
import {DbServiceProvider} from '../../providers/dbservice/dbservice';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

   user = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbService:DbServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewDidEnter(){
    this.getUser();
  }

  updateUser(){

  }

  getUser(){
    var sql = "SELECT * FROM USER";
    console.log("execute query ");
     
    this.dbService.executeSqlQuery(sql,[]).then(res=>{
      var k;
          var users = new Array<User>();
          for(k=0;k<res.rows.length;k++){
        
          
             users.push(
              {
               id 			    : res.rows.item(k).Id,
               name 			  : res.rows.item(k).Name,
               profileURL 	  : res.rows.item(k).ProfileURL,
               password      : res.rows.item(k).Password,
                 email : res.rows.item(k).Email
              })
          
          }
          this.user = users[0];
    }).catch(e=>{
         console.log("Error message")
    });
  }

}
