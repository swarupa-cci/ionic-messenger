import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppStorage} from '../../common/appstorage'
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  storage:Storage = new Storage(null);
  appstorage:AppStorage = new AppStorage(this.storage) ;

  constructor(public navCtrl: NavController) {
     
  }

  itemClick(){
    console.log("Profile clicked");
  }

  ionViewDidLoad(){
    debugger;
    console.log('ionViewDidLoad HomePage');
    this.appstorage.getStorageValue("ISLOGGEDIN").then((val) => {
     console.log(val);
   
     if(val != null){
    
        if(val != "true"){

         console.log('isloggedin false');
          this.navCtrl.push(LoginPage,'');
       }
   }
   else{
   
    this.navCtrl.push(LoginPage,'');
   }
       
  });

  }


}
