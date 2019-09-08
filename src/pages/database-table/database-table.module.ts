import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatabaseTablePage } from './database-table';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    DatabaseTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DatabaseTablePage),
    SuperTabsModule
  ],
  exports:[
    DatabaseTablePage
  ]
})
export class DatabaseTablePageModule {}
