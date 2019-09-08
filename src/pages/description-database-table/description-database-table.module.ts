import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescriptionDatabaseTablePage } from './description-database-table';

@NgModule({
  declarations: [
    DescriptionDatabaseTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DescriptionDatabaseTablePage),
  ],
})
export class DescriptionDatabaseTablePageModule {}
