import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-intro-page2',
  templateUrl: 'intro-page2.html',
})
export class IntroPage2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  swipeLeftToIntroPage1(e){
    if(e.offsetDirection == 4){
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
       };
      this.nativePageTransitions.curl(options);
      this.navCtrl.setRoot('IntroPage1Page');
    }
  }

}
