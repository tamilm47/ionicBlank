import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletePage } from './delete';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    DeletePage,
  ],
  imports: [
    IonicPageModule.forChild(DeletePage),
    SuperTabsModule
  ],
})
export class DeletePageModule {}
