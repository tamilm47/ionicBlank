import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsComponent } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  
  page1: any = 'DescriptionDatabaseTablePage';
  page2: any = 'ExampleDatabaseTablePage';
  page3: any = 'EditorDatabaseTablePage';

  @ViewChild(SuperTabsComponent,{static:false}) superTabs: SuperTabsComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onTabSelect(ev:any){
    this.superTabs.slideTo(ev.ExampleDatabaseTablePage);
  }

}
