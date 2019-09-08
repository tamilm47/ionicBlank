import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsComponent } from 'ionic2-super-tabs';

/**
 * Generated class for the EditorDatabaseTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editor-database-table',
  templateUrl: 'editor-database-table.html',
})
export class EditorDatabaseTablePage {

  editorPage: any = 'EditorPage';
  outputPage: any = 'OutputPage';

  pageMenuTiTle : any
  
  @ViewChild(SuperTabsComponent,{static:false}) superTabs: SuperTabsComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageMenuTiTle=navParams.data.pageMenuTiTle;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorDatabaseTablePage');
  }

}
