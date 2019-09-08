import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicCommandsPage } from './basic-commands';

@NgModule({
  declarations: [
    BasicCommandsPage
  ],
  imports: [
    IonicPageModule.forChild(BasicCommandsPage),
  ],
})
export class BasicCommandsPageModule {}
