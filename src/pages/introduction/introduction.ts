import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  swipeRightToIntroPage1(e){
    if(e.offsetDirection == 2){
      let options: NativeTransitionOptions = {
        direction: 'right',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
       };
      this.nativePageTransitions.curl(options);
      this.navCtrl.setRoot('IntroPage1Page');
    }
  }
}
