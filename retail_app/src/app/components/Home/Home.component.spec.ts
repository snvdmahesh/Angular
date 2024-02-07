import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { StarfilterComponent } from './sidebar/starfilter/starfilter.component';
import { ProductitemsComponent } from './productitemscomponent/productitems.component';
import { SortPipe } from 'src/app/sort.pipe';
import { FilterByStarRatingPipe, FilterByTitlePipe } from 'src/app/filter.pipe';

import { HomeComponent } from './Home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchbarComponent,
        SideBarComponent, StarfilterComponent,
        ProductitemsComponent, SortPipe,
        FilterByStarRatingPipe, FilterByTitlePipe],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
