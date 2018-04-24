import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {User} from '../../model/user'
import { HomePage } from '../home/home';
import {AppStorage} from '../../common/appstorage';
import { Storage } from '@ionic/storage';
import {DbServiceProvider} from '../../providers/dbservice/dbservice';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  storage:Storage = new Storage(null);
  user = new User();
  appstorage:AppStorage = new AppStorage(this.storage);
  constructor(public navCtrl: NavController, public navParams: NavParams, public  dbProvider:DbServiceProvider,public viewCtrl:ViewController) {
   
  }

  ionViewDidLoad() {
    debugger;
    this.appstorage.setStorageValue("ISLOGGEDIN","false");
    console.log('ionViewDidLoad LoginPage');
  }

  
  loginUser(){
    debugger;
     console.log(this.user.name);
    
    var sql = "INSERT INTO USER ('NAME','PASSWORD') VALUES(?,?)";
    var params = [this.user.name,this.user.password];
    this.dbProvider.executeSqlQuery(sql,params);
    this.appstorage.setStorageValue("ISLOGGEDIN","true");
    this.viewCtrl.dismiss();
   // this.navCtrl.setRoot(HomePage);
    
    
  }
}
