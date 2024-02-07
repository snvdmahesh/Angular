import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchmoduleComponent } from './components/searchmodule/searchmodule.component';
import { HomeComponent } from './components/Home/Home.component';
import { SideBarComponent } from './components/Home/sidebar/sidebar.component';
import { SearchbarComponent } from './components/Home/searchbar/searchbar.component';
import { SortbarComponent } from './components/Home/sortbar/sortbar.component';
import {ProductitemsComponent} from './components/Home/productitemscomponent/productitems.component';
import { ProductComponent } from './components/Home/productitemscomponent/product/product.component';
import { StarfilterComponent } from './components/Home/sidebar/starfilter/starfilter.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SortPipe } from './sort.pipe';
import { FilterByStarRatingPipe } from './filter.pipe';
import { FilterByTitlePipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchmoduleComponent,
    HomeComponent,
    SideBarComponent,
    SearchbarComponent,
    SortbarComponent,
    ProductitemsComponent,
    ProductComponent,
    StarfilterComponent,
    SortPipe,
    FilterByStarRatingPipe,
    FilterByTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatIconModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
