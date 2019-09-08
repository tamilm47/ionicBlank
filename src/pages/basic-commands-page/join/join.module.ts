import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinPage } from './join';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    JoinPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinPage),
    SuperTabsModule
  ],
})
export class JoinPageModule {}
