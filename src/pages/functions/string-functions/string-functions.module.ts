import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StringFunctionsPage } from './string-functions';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    StringFunctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(StringFunctionsPage),
    SuperTabsModule
  ],
})
export class StringFunctionsPageModule {}
