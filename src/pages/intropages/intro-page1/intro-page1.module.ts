import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage1Page } from './intro-page1';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    IntroPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage1Page),
  ],
  providers:[
    NativePageTransitions
  ]
})
export class IntroPage1PageModule {}
