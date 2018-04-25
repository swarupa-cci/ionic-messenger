import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { AppStorage} from '../../common/appstorage'
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import {TutorialPage} from '../tutorial/tutorial'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 // modalCtrl :ModalController;
  storage:Storage = new Storage(null);
  appstorage:AppStorage = new AppStorage(this.storage) ;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
     
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
         this.modalCtrl.create(LoginPage).present();
    
       }
   }
   else{
    //this.modalCtrl.create(TutorialPage,'');
    this.modalCtrl.create(LoginPage).present();
   // this.navCtrl.push(LoginPage,'');
   }
       
  });

  }

  ionViewDidEnter(){
    console.log("View did enter");

    this.appstorage.getStorageValue("ISLOGGEDIN").then((val)=>{
      if(val != null){
    
        if(val == "true"){
 
         console.log('isloggedin true');
         this.modalCtrl.create(TutorialPage,'').present();
    
       }
      }
    });
    
  }


}
