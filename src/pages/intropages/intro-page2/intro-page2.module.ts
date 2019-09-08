import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage2Page } from './intro-page2';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    IntroPage2Page,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage2Page),
  ],
  providers:[
    NativePageTransitions
  ]
})
export class IntroPage2PageModule {}
