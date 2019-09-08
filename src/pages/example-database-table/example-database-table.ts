import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExampleDatabaseTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-example-database-table',
  templateUrl: 'example-database-table.html',
})
export class ExampleDatabaseTablePage {

  pageMenuTiTle:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageMenuTiTle=navParams.data.pageMenuTiTle;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExampleDatabaseTablePage');
  }

}
