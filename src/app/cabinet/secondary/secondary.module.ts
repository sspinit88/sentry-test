import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecondaryComponent } from './secondary.component';


const routes: Routes = [
  {
    path: '',
    component: SecondaryComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SecondaryComponent
  ],
  exports: [
    RouterModule,
  ],
})
export class SecondaryModule { }
