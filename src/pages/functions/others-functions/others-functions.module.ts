import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OthersFunctionsPage } from './others-functions';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    OthersFunctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(OthersFunctionsPage),
    SuperTabsModule
  ],
})
export class OthersFunctionsPageModule {}
