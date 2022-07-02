import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../authentication/guards/auth.guard';

const routes: Routes = [{
    path: '',
    component: MainComponent,
    children:[{
        path: '',
        loadChildren: () => import('../components/login/login.module').then(m => m.LoginModule)
    },
      {
      path:'home',
      canActivate:[AuthGuard],
      loadChildren: () => import('../components/home/home.module').then(m => m.HomeModule)
    }]
  }]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class pageLayoutModule { }
