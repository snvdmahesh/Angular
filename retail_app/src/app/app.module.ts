import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchmoduleComponent } from './components/searchmodule/searchmodule.component';
import { WrapercomponentComponent } from './components/wrapercomponent/wrapercomponent.component';
import { SidebarComponent } from './components/wrapercomponent/sidebar/sidebar.component';
import { SearchbarComponent } from './components/wrapercomponent/searchbar/searchbar.component';
import { SortbarComponent } from './components/wrapercomponent/sortbar/sortbar.component';
import { ProductitemscomponentComponent } from './components/wrapercomponent/productitemscomponent/productitemscomponent.component';
import { ProductcomponentComponent } from './components/wrapercomponent/productitemscomponent/productcomponent/productcomponent.component';
import { StarfilterComponent } from './components/wrapercomponent/sidebar/starfilter/starfilter.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SearchmoduleComponent,
    WrapercomponentComponent,
    SidebarComponent,
    SearchbarComponent,
    SortbarComponent,
    ProductitemscomponentComponent,
    ProductcomponentComponent,
    StarfilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
