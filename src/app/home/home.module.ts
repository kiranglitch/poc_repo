import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ClaimsComponent } from '../../app/claims/claims.component'

import { HomePageRoutingModule } from './home-routing.module';
import { FileuploadComponent } from '../fileupload/fileupload.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    ClaimsComponent,
  FileuploadComponent]
})
export class HomePageModule { }
