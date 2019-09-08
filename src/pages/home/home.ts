import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, MenuController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { DescriptionDatabaseTablePage } from '../description-database-table/description-database-table';
import { DatabaseTablePage } from '../database-table/database-table';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  rootPage:any = 'IntroductionPage';
  
  selectedMenu:any;

  pages:any;

  provider:any;

  activePage:any;

  @ViewChild(Nav,{static:false}) nav: Nav;

  rightMenuTitle: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuProvider: MenuProvider,
    public menuCtrl: MenuController) {
    this.getSideMenuData();

        // if(this.menuCtrl.isEnabled("menu-right")){
        //   this.rootPage="DatabaseTablePage";
        // }
      // if(this.navParams.get('data') == "DatabaseTablePage"){
      //  this.rootPage="DatabaseTablePage";
      // }
  }

  getSideMenuData() {
    this.provider=this.menuProvider.getSideMenus();
      this.provider.subscribe(response=> {
          this.pages = response;
          console.log(this.pages);
          this.activePage=this.pages[0];
      });
  }

  openPage(page,index){
    if(page.pageName){
      this.nav.setRoot(page.pageName);
      this.activePage = page;
      this.menuCtrl.close();
    }else{
      if(this.selectedMenu === index){
        this.selectedMenu=0;
        //this.selectedMenu = null;
      }else{
        this.selectedMenu = index;
      }
    }
    this.getRightMenuTitle();
    //this.menuCtrl.enable(true,"menu-left");    
    //this.menuCtrl.enable(false,"menu-right");
  }

  isActive(page){
    return page == this.activePage;
  }

   openPageRight(page) {
    //this.menuCtrl.enable(false,"menu-left");    
    //this.menuCtrl.enable(true,"menu-right");
    //this.rootPage = "DatabaseTablePage";
//    this.navCtrl.push(DatabaseTablePage,{pageMenuTiTle:page.title});
    switch (this.activePage.pageName) {
      case "DatabaseTablePage":
        this.nav.setRoot("DatabaseTablePage",{pageMenuTiTle:page.title});
        break;
      case "SelectPage":
        this.nav.setRoot("SelectPage");
        break;
      case "InsertPage":
        this.nav.setRoot("InsertPage");
        break;
      case "UpdatePage":
        this.nav.setRoot("UpdatePage");
        break;
      case "DeletePage":
        this.nav.setRoot("DeletePage");
        break;
      case "JoinPage":
        this.nav.setRoot("JoinPage");
        break;
      case "KeysPage":
        this.nav.setRoot("KeysPage");
        break;
      case "StringFunctionsPage":
        this.nav.setRoot("StringFunctionsPage");
        break;
      case "AggregateFunctionsPage":
        this.nav.setRoot("AggregateFunctionsPage");
        break;
      case "MathematicalFunctionsPage":
        this.nav.setRoot("MathematicalFunctionsPage");
        break;
      case "DateFunctionsPage":
        this.nav.setRoot("DateFunctionsPage");
        break;
      case "OthersFunctionsPage":
        this.nav.setRoot("OthersFunctionsPage");
        break;
      case "LoopsStatementsPage":
        this.nav.setRoot("LoopsStatementsPage");
        break;
      default:
        break;
    }
     console.log("right menu");
     this.menuCtrl.close();
     //this.navCtrl.push(DatabaseTablePage,{pageMenuTiTle:page.title});
   }

   getRightMenuTitle(){
    switch (this.activePage.pageName) {
      case "DatabaseTablePage":
        this.rightMenuTitle = [
          { title: 'Create Database'},{ title: 'Delete Database'},{ title: 'Alter Database' },{ title: 'Drop Database'}
        ];
        break;
      case "SelectPage":
        this.rightMenuTitle = [
          { title: 'SELECT Statement'},{ title: 'SELECT UNIQUE'},{ title: 'SELECT DISTINCT' },{ title: 'SELECT COUNT'},
          { title: 'SELECT TOP'},{ title: 'SELECT FIRST'},{ title: 'SELECT LAST' },{ title: 'SELECT RANDOM'}
        ];
        break;
      case "InsertPage":
      this.rightMenuTitle = [
        { title: 'Insert Statement'},{ title: 'INSERT INTO values'},{ title: 'INSERT INTO SELECT' },{ title: 'INSERT Multiple Rows'}
      ];
        break;
      case "UpdatePage":
      this.rightMenuTitle = [
        { title: 'UPDATE Statement'},{ title: 'UPDATE JOIN'},{ title: 'UPDATE DATE' }
      ];
        break;
      case "DeletePage":
      this.rightMenuTitle = [
        { title: 'DELETE Statement'},{ title: 'DELETE Table'},{ title: 'DELETE Row' },{ title: 'DELETE All Rows'},
        { title: 'DELETE Duplicate Rows'},{ title: 'DELETE Database'},{ title: 'DELETE View' },{ title: 'DELETE Join'}
      ];
        break;
      case "JoinPage":
      this.rightMenuTitle = [
        { title: 'JOIN'},{ title: 'Outer Join'},{ title: 'LEFT Join'},{ title: 'RIGHT Join' },{ title: 'FULL Join'},
        { title: 'CROSS Join'},{ title: 'SELF Join'},{ title: 'Questions'}
      ];
        break;
      case "KeysPage":
      this.rightMenuTitle = [
        { title: 'Primary Key'},{ title: 'Foriegn Key'},{ title: 'Composite Key'},{ title: 'Unique Key' },{ title: 'Alternate Key'}
      ];
        break;
      case "StringFunctionsPage":
      this.rightMenuTitle = [
        { title: 'ASCII'},{ title: 'CHAR'},{ title: 'CHAR INDEX'},{ title: 'CONCAT' },{ title: 'CONCAT_US'},
        { title: 'DIFFERENCE'},{ title: 'FORMAT'},{ title: 'LEN'},{ title: 'LEFT'}
      ];
        break;
      case "AggregateFunctionsPage":
      this.rightMenuTitle = [
        { title: 'AVG'},{ title: 'CheckSum_Agg'},{ title: 'COUNT'},{ title: 'COUNT_BIG' },{ title: 'GROUPING'},
        { title: 'GROUPING_ID'},{ title: 'MAX'},{ title: 'MIN'}
      ];
        break;
      case "MathematicalFunctionsPage":
      this.rightMenuTitle = [
        { title: 'ABS'},{ title: 'ACOS'},{ title: 'ASIN'},{ title: 'ATAN' },{ title: 'ATN2'},
        { title: 'CEILING'},{ title: 'COS'},{ title: 'COT'}
      ];
        break;
      case "DateFunctionsPage":
      this.rightMenuTitle = [
        { title: 'Current_TimeStamp'},{ title: 'DateFromParts'},{ title: 'DateTimeFromParts'},{ title: 'DateTime2FromParts' }
      ];
        break;
      case "OthersFunctionsPage":
      this.rightMenuTitle = [
        { title: 'Configuration Functions'},{ title: 'System Functions'},{ title: 'XML Functions'},{ title: 'Conversion Functions' },
        { title: 'Analytic Functions'},{ title: 'Logical Functions'},{ title: 'Ranking Functions' }
      ];
        break;
      case "LoopsStatementsPage":
      this.rightMenuTitle = [
        { title: 'If Else Statement'},{ title: 'Else If Statement'},{ title: 'While Loop'},{ title: 'Nested While Loop' },
        { title: 'Break Statement'},{ title: 'Continue Statement'},{ title: 'GOtO Statement'}
      ];
        break;
      default:
        break;
    }
   }

}
