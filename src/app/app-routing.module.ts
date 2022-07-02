import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./layouts/pageLayout.module').then(m => m.pageLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
