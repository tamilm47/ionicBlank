import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionPage } from './introduction';

import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    IntroductionPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroductionPage),
  ],
  providers:[
    NativePageTransitions
  ]
})
export class IntroductionPageModule {}
