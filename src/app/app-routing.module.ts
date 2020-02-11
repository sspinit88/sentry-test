import { CabinetComponent } from './cabinet/cabinet.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
      },
      {
        path: 'first',
        loadChildren: () => import('./cabinet/first/first.module').then(m => m.FirstModule),
      },
      {
        path: 'secondary',
        loadChildren: () => import('./cabinet/secondary/secondary.module').then(m => m.SecondaryModule),
      }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
