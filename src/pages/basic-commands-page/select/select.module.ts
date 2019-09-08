import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectPage } from './select';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    SelectPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectPage),
    SuperTabsModule
  ],
})
export class SelectPageModule {}
