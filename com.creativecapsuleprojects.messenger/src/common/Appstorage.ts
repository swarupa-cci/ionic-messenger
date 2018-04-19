import { Storage } from '@ionic/storage';

export class AppStorage{

    constructor(private storage: Storage) { 

    }
  
    setStorageValue(key:string, value:String){
        this.storage.set(key, value);
    }
  
    getStorageValue(key:string){
         return this.storage.get(key)
    }
  
}