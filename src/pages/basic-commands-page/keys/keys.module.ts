import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeysPage } from './keys';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    KeysPage,
  ],
  imports: [
    IonicPageModule.forChild(KeysPage),
    SuperTabsModule
  ],
})
export class KeysPageModule {}
