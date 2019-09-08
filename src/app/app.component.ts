import { Component } from '@angular/core';
import { Platform, LoadingController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = 'HomePage';

  loader:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public loadingCtrl: LoadingController, public storage: Storage) {
  this.presentLoading();

    this.platform.ready().then((result)=>{
      this.storage.get('initialSlider').then((result)=>{
        if(result){
          this.rootPage = 'HomePage';
        }else{
          this.rootPage = 'SliderPage';
          this.storage.set('initialSlider',true);
        }
        this.loader.dismiss();
      });
    });

  }

  presentLoading(){
    this.loader=this.loadingCtrl.create({
      content:"Stepping into !!!"
    });
  }

}
