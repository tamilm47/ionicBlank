import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExampleDatabaseTablePage } from './example-database-table';

@NgModule({
  declarations: [
    ExampleDatabaseTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ExampleDatabaseTablePage),
  ],
})
export class ExampleDatabaseTablePageModule {}
