import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorDatabaseTablePage } from './editor-database-table';

@NgModule({
  declarations: [
    EditorDatabaseTablePage,
  ],
  imports: [
    IonicPageModule.forChild(EditorDatabaseTablePage)
  ],
})
export class EditorDatabaseTablePageModule {}
