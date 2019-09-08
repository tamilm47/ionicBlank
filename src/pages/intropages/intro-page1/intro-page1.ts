import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-intro-page1',
  templateUrl: 'intro-page1.html',
})
export class IntroPage1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  swipeRightAndLeft(e){
    if(e.offsetDirection == 2){
      let options: NativeTransitionOptions = {
        direction: 'right',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
       };
      this.nativePageTransitions.curl(options);
      this.navCtrl.setRoot('IntroPage2Page');
    }else{
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
       };
      this.nativePageTransitions.curl(options);
      this.navCtrl.setRoot('IntroductionPage');
    }
  }

}
