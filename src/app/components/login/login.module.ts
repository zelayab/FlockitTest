import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Routes, RouterModule } from '@angular/router';

//Route
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  }
]

//ngModule
@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ],
})
export class LoginModule { }

