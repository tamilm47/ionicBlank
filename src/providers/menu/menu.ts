import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MenuProvider Provider');
  }

  getSideMenus(){
    return this.http.get('assets/data/menus.json')
     .map(response=>response);
  }

}
