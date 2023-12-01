
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchmoduleComponent } from './components/searchmodule/searchmodule.component';
import { ProductComponent } from './components/Home/productitemscomponent/product/product.component';
import { HomeComponent } from './components/Home/Home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:"/Home",
    pathMatch:"full"
  },

  {
    path: 'search',
    component: SearchmoduleComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
