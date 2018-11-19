import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';


import { BasicPage } from '..basic/basic';
import { AdvancedPage } from '..advanced/advanced';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  rootPage:any = BasicPage;
  
  activePage:any;

  pages: Array<{pageTitle: string, pageName: any,icon: any}>;

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.pages = [
      { pageTitle: 'SQL Basics', pageName: BasicPage , icon: 'home'},
      { pageTitle: 'SQL Advanced', pageName: AdvancedPage, icon: 'contacts' }
    ];

    this.activePage=this.pages[0];

  }

  openPage(page){
  	this.nav.setRoot(page.pageName);
    this.activePage=page;
  }

  isActive(page){
    return page == this.activePage;
  }

}
