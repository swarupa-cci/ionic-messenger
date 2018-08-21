import { Component } from '@angular/core';
import { NavController,ModalController,AlertController } from 'ionic-angular';
import { AppStorage} from '../../common/appstorage'
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import {TutorialPage} from '../tutorial/tutorial'
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photos : any;
  public base64Image : string;

 // modalCtrl :ModalController;
  storage:Storage = new Storage(null);
  appstorage:AppStorage = new AppStorage(this.storage) ;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private camera : Camera, private alertCtrl:AlertController) {
     
  }

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
    let confirm = this.alertCtrl.create({
      title: 'Sure you want to delete this photo? There is NO undo!',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.photos.splice(index, 1);
          }
        }
      ]
    });
  confirm.present();
 }

  takePhoto(){
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
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
