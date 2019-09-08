import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';

import { HomePage } from './home';
//import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { DescriptionDatabaseTablePage } from '../description-database-table/description-database-table';
import { DatabaseTablePage } from '../database-table/database-table';
import { DatabaseTablePageModule } from '../database-table/database-table.module';
import { DescriptionDatabaseTablePageModule } from '../description-database-table/description-database-table.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
  	HttpClientModule,
    IonicPageModule.forChild(HomePage),
    SuperTabsModule.forRoot(),
    DatabaseTablePageModule
  ],
  exports: [
    HomePage
  ],
  providers: [
  	MenuProvider
  ]
})
export class HomePageModule {}
