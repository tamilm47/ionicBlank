import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateFunctionsPage } from './date-functions';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    DateFunctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(DateFunctionsPage),
    SuperTabsModule
  ],
})
export class DateFunctionsPageModule {}
