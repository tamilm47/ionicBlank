import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';

import { BasicPage } from '..basic/basic';
import { AdvancedPage } from '..advanced/advanced';

@NgModule({
  declarations: [
    HomePage,
    BasicPage,
    AdvancedPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage,
    BasicPage,
    AdvancedPage
  ],
})
export class HomePageModule {}
