import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MovieApiService } from '../../services/tmdb-api-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private MovieApiService: MovieApiService) {}
  // searchText:String = '';

  search(searchText: string) {
    // console.log(searchText)
    this.MovieApiService.getSearch(searchText).subscribe((results: any) => {
      // console.log("Search Results: ",results)
    });
  }

  ngOnInit(): void {
    // this.MovieApiService.getSearch(searchText).subscribe((results:any)=> {console.log("Search Results: ",results)})
  }
}
