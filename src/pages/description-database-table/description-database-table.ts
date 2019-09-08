import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescriptionDatabaseTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description-database-table',
  templateUrl: 'description-database-table.html',
})
export class DescriptionDatabaseTablePage {

  pageMenuTiTle : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageMenuTiTle=navParams.data.pageMenuTiTle;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionDatabaseTablePage');
  }

}
