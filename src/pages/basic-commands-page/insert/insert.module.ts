import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertPage } from './insert';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    InsertPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertPage),
    SuperTabsModule
  ],
})
export class InsertPageModule {}
