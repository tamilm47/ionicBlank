import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { OutputPage } from '../output/output';

/**
 * Generated class for the EditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})
export class EditorPage {

  queryValue : any;

  tab:Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient:HttpClient) {
    this.tab = this.navCtrl.parent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorPage');
  }

  getQuery(){

    let data = {
      query: this.queryValue
    };
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

          let params = new HttpParams();
          params = params.append('query', this.queryValue);

    //alert(this.queryValue);
    this.httpClient.get('http://localhost:8080/getItems/'+this.queryValue
    ).subscribe(response => {
            console.log('GET Response:', response);
            
            // this.navCtrl.push("OutputPage",{tableData:response});
            // this.navCtrl.push("OutputPage",);
            this.tab.getByIndex(1).rootParams={tableData:response};
            this.tab.select(1);
    });

    
  }

}
