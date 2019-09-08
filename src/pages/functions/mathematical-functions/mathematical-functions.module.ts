import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathematicalFunctionsPage } from './mathematical-functions';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MathematicalFunctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MathematicalFunctionsPage),
    SuperTabsModule
  ],
})
export class MathematicalFunctionsPageModule {}
