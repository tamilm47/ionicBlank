import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-output',
  templateUrl: 'output.html',
})
export class OutputPage {

  resultedTableData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resultedTableData = navParams.get('tableData');
    console.log(this.resultedTableData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutputPage');
  }

}
