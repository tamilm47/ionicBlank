import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoopsStatementsPage } from './loops-statements';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    LoopsStatementsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoopsStatementsPage),
    SuperTabsModule
  ],
})
export class LoopsStatementsPageModule {}
