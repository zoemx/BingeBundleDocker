import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {

  constructor(private HeaderComponet: HeaderComponent){
    
  }
   searchText: String = '';

ngOnit(){
  // this.HeaderComponet.search(this.searchText);

  // this.MovieApiService.getSearch(this.query).subscribe((response:any)=> {
  //   console.log(response)
}
}
