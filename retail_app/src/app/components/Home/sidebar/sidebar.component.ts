import { Component ,EventEmitter,Output} from '@angular/core';
import { StarfilterComponent } from './starfilter/starfilter.component';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {
  @Output() filterByStarRating: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();
  onFilterByStarRating(starRating: number | undefined) {
    this.filterByStarRating.emit(starRating);
  }
}





