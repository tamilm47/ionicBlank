import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorPage } from './editor';
import { HttpClientModule } from '@angular/common/http';
import { OutputPage } from '../output/output';
import { OutputPageModule } from '../output/output.module';

@NgModule({
  declarations: [
    EditorPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorPage),
    HttpClientModule,
  ],
})
export class EditorPageModule {}
