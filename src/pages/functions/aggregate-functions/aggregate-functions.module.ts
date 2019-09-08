import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AggregateFunctionsPage } from './aggregate-functions';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    AggregateFunctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AggregateFunctionsPage),
    SuperTabsModule
  ],
})
export class AggregateFunctionsPageModule {}
