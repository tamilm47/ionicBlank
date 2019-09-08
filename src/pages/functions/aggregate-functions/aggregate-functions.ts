import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsComponent } from 'ionic2-super-tabs';

/**
 * Generated class for the AggregateFunctionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aggregate-functions',
  templateUrl: 'aggregate-functions.html',
})
export class AggregateFunctionsPage {

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
