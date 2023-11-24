import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchmoduleComponent } from './components/searchmodule/searchmodule.component';
import { ProductcomponentComponent } from './components/wrapercomponent/productitemscomponent/productcomponent/productcomponent.component';

const routes: Routes = [


  {
    path: 'home',
    component: SearchmoduleComponent,
  },
  {
    path:'product',
    component:ProductcomponentComponent,
  }
  // {
  //   path: 'city-ratings',
  //   loadChildren: () =>
  //     import('./components/searchmodule/searchmodule.component').then(
  //       (m) => m.CityRatingsModule
  //     ),
  // },
  // {
  //   path: 'city-names',
  //   loadChildren: () =>
  //     import('./city-names/city-names.module').then(
  //       (m) => m.CityNamesModule
  //     ),
  // },
  // {
  //   path: 'hello',
  //   loadChildren: () =>
  //     import('./hello/hello.module').then((m) => m.HelloModule),
  // },
  // {
  //   path: '',
  //   redirectTo: 'city-ratings',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
