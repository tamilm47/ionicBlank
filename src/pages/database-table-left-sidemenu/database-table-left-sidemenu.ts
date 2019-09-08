// import { Component, ViewChild  } from '@angular/core';
// import { IonicPage, NavController, NavParams ,Nav, MenuController } from 'ionic-angular';


// @IonicPage()
// @Component({
//   selector: 'page-database-table-left-sidemenu',
//   templateUrl: 'database-table-left-sidemenu.html',
// })
// export class DatabaseTableLeftSidemenuPage {

//   @ViewChild(Nav) nav: Nav;

//   rootPage:any;

//   databaseTablePages: Array<{title: string, component: any}>;

//   constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {

//     this.databaseTablePages = [
//       { title: 'Create Database', component: 'DatabaseTablePage' },
//       { title: 'Delete Database', component: 'DatabaseTablePage' },
//       { title: 'Alter Database', component: 'DatabaseTablePage' },
//       { title: 'Drop Database', component: 'DatabaseTablePage' },
//     ];
//     this.rootPage = "DatabaseTablePage";
//   }

//   openPageRight(page) {
//     //this.menuCtrl.enable(false,"menu-left");    
//     //this.menuCtrl.enable(true,"menu-right");
//     this.rootPage = "DatabaseTablePage";
//      this.nav.setRoot("DatabaseTablePage");
//      console.log("right menu");
//      this.menuCtrl.close();
//    }

// }
