import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ClaimsComponent } from '../claims/claims.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,  
     children: [
      {
        path: 'claims', 
        component: ClaimsComponent 
      },
      {
        path: 'fileupload', 
        component: FileuploadComponent 
      },
      { path: '', redirectTo: 'claims', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
