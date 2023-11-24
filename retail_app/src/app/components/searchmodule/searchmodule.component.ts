import { Component } from '@angular/core';

@Component({
  selector: 'app-searchmodule',
  templateUrl: './searchmodule.component.html',
  styleUrls: ['./searchmodule.component.scss']
})
export class SearchmoduleComponent {
  search: string = '';
   onSearch(){
    console.log('hello')
   }
}
