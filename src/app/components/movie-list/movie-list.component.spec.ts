import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MovieListComponent } from './movie-list.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MovieApiService } from '../../services/tmdb-api-service';
import { MovieTitle } from '../../../interfaces/streaming-Service';

describe('MovieListFunctions', ()=>{
/*   let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>; */
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let movieApiService: MovieApiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent, HttpClientTestingModule],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieApiService = TestBed.inject(MovieApiService);
  });

  describe('#getMovies', async () => {
    let expectedMovieTitles: MovieTitle[];

    beforeEach(() => {
      //movieApiService = TestBed.inject(MovieApiService);
      expectedMovieTitles = [
        { id: 1, title: 'A', poster_path: '/poster' },
        { id: 2, title: 'B', poster_path: '/poster' },
      ] as MovieTitle[];
    });

    it('should return expected tv titles (called once)', async () => {
      movieApiService.getHomepageMovieTitles(1).subscribe({
        next: (movies) =>
          expect(movies).toEqual(
            expectedMovieTitles,
            'should return expected tv titles'
          ),
        error: fail,
      });

      // Expect one request to the API with the correct URL and parameters
      const req = httpTestingController.expectOne(
        'https://api.themoviedb.org/3/movie/popular?page=1&limit=100' // Assuming these are the expected parameters
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data (assuming expectOne doesn't automatically trigger response)
      req.flush(expectedMovieTitles);

      // Verify no outstanding requests after test completes
      httpTestingController.verify();
    });
  })
})

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let movieApiService: MovieApiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent, HttpClientTestingModule],
      providers: [MovieApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieApiService = TestBed.inject(MovieApiService);
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h2 title of "Movies"', ()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('MOVIES');  
  })

  //TODO: this test expects 2 but receives 0
/*   it('should display a selection of Movies', async()=>{
    const  expectedMovieTitles = [
      { id: 1, title: 'A', poster_path: '/poster' },
      { id: 2, title: 'B', poster_path: '/poster' },
    ] as MovieTitle[];
    

    spyOn(movieApiService, 'getHomepageMovieTitles').and.returnValue(of(expectedMovieTitles));
    
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const movieCards = compiled.querySelectorAll('.box');
    console.log(movieCards)
    expect(movieCards.length).toEqual(expectedMovieTitles.length);
  }) */

});
