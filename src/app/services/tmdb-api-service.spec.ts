import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieApiService } from './tmdb-api-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import {
  MovieTitle,
  SearchTitles,
  TVTitle,
} from '../../interfaces/streaming-Service';

describe('TMDB-API-Service', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let movieApiService: MovieApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieApiService = TestBed.inject(MovieApiService);
  });

  it('should be created', () => {
    expect(movieApiService).toBeTruthy();
  });

  describe('#getTvTitles', async () => {
    let expectedTvTitles: TVTitle[];
    let pageNumber: number = 1;
    beforeEach(() => {
      expectedTvTitles = [
        { id: 1, name: 'A', poster_path: '/poster' },
        { id: 2, name: 'B', poster_path: '/poster' },
      ] as TVTitle[];
    });

    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      //httpTestingController.verify();
    });

    it('should return expected tv titles (called once)', async () => {
      movieApiService.getHomepageTVTitles(pageNumber).subscribe({
        next: (tvTitles) =>
          expect(tvTitles).toEqual(
            expectedTvTitles,
            'should return expected tv titles'
          ),
        error: fail,
      });

      // Expect one request to the API with the correct URL and parameters
      const req = httpTestingController.expectOne(
        `https://api.themoviedb.org/3/tv/popular?page=${pageNumber}&limit=100` // Assuming these are the expected parameters
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data (assuming expectOne doesn't automatically trigger response)
      req.flush(expectedTvTitles);

      // Verify no outstanding requests after test completes
      httpTestingController.verify();
    });

    ///TODO: Revisit this test and see if it works

    //   it('should be OK returning no tv titles', () => {
    //     movieApiService.getHomepageTVTitles(1).subscribe({
    //       next: (tvTitles) =>
    //         expect(tvTitles.length).toEqual(
    //           0,
    //           'should have empty tv titles array'
    //         ),
    //       error: fail,
    //     });

    //     const req = httpTestingController.expectOne(
    //       'https://api.themoviedb.org/3/tv/popular'
    //     );
    //     req.flush([]); // Respond with no heroes
    //   });

    //   it('should turn 404 into an empty heroes result', () => {
    //     movieApiService.getHomepageTVTitles(1).subscribe({
    //       next: (tvTitles) =>
    //         expect(tvTitles.length).toEqual(
    //           0,
    //           'should return empty heroes array'
    //         ),
    //       error: fail,
    //     });

    //     const req = httpTestingController.expectOne(
    //       'https://api.themoviedb.org/3/tv/popular'
    //     );

    //     // respond with a 404 and the error message in the body
    //     const msg = 'deliberate 404 error';
    //     req.flush(msg, { status: 404, statusText: 'Not Found' });
    //   });

    //   it('should return expected tv titles (called multiple times)', () => {
    //     movieApiService.getHomepageTVTitles(1).subscribe();
    //     movieApiService.getHomepageTVTitles(1).subscribe();
    //     movieApiService.getHomepageTVTitles(1).subscribe({
    //       next: (tvTitles) =>
    //         expect(tvTitles).toEqual(
    //           expectedTvTitles,
    //           'should return expected tv titles'
    //         ),
    //       error: fail,
    //     });

    //     const requests = httpTestingController.match(
    //       'https://api.themoviedb.org/3/tv/popular'
    //     );
    //     expect(requests.length).toEqual(3, 'calls to getHomepageTVTitles()');

    //     // Respond to each request with different mock hero results
    //     requests[0].flush([]);
    //     requests[1].flush([{ id: 1, name: 'bob' }]);
    //     requests[2].flush(expectedTvTitles);
    //   });
  });

  describe('#getMovieTitles', async () => {
    let expectedMovieTitles: MovieTitle[];
    let pageNumber: number = 1;

    beforeEach(() => {
      expectedMovieTitles = [
        { id: 1, title: 'A', poster_path: '/poster' },
        { id: 2, title: 'B', poster_path: '/poster' },
      ] as MovieTitle[];
    });

    it('should return expected movie titles (called once)', async () => {
      movieApiService.getHomepageMovieTitles(pageNumber).subscribe({
        next: (movieTitles) =>
          expect(movieTitles).toEqual(
            expectedMovieTitles,
            'should return expected movie titles'
          ),
        error: fail,
      });

      // Expect one request to the API with the correct URL and parameters
      const req = httpTestingController.expectOne(
        `https://api.themoviedb.org/3/movie/popular?page=${pageNumber}&limit=100` // Assuming these are the expected parameters
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data (assuming expectOne doesn't automatically trigger response)
      req.flush(expectedMovieTitles);

      // Verify no outstanding requests after test completes
      httpTestingController.verify();
    });
  });

  describe('#getSingleMovieTitle', async () => {
    let expectedMovieTitle: MovieTitle;

    beforeEach(() => {
      expectedMovieTitle = {
        id: 1,
        title: 'A',
        poster_path: '/poster',
      } as MovieTitle;
    });


    it('should return expected movie title (called once)', async () => {
      movieApiService.getSingleMovieTitle().subscribe({
        next: (movieTitle) =>
          expect(movieTitle).toEqual(
            expectedMovieTitle,
            'should return expected tv titles'
          ),
        error: fail,
      });

      // Expect one request to the API with the correct URL and parameters
      const req = httpTestingController.expectOne(
        'https://api.themoviedb.org/3/movie/948549?language=en-US' // Assuming these are the expected parameters
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data (assuming expectOne doesn't automatically trigger response)
      req.flush(expectedMovieTitle);

      // Verify no outstanding requests after test completes
      httpTestingController.verify();
    });
  });

  describe('#getSearch', async () => {
    let expectedSearchTitles: SearchTitles[];
    let searchText: string = 'The Office'

    beforeEach(() => {
      expectedSearchTitles = [
        { id: 1, title: 'A', poster_path: '/poster' },
        { id: 2, name: 'B', poster_path: '/poster' },
      ] as SearchTitles[];
    });

    it('should return expected movie title (called once)', async () => {
      movieApiService.getSearch(searchText).subscribe({
        next: (searchResults) =>
          expect(searchResults).toEqual(
            expectedSearchTitles,
            'should return expected tv titles'
          ),
        error: fail,
      });

      // Expect one request to the API with the correct URL and parameters
      const req = httpTestingController.expectOne(
        `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1` // Assuming these are the expected parameters
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data (assuming expectOne doesn't automatically trigger response)
      req.flush(expectedSearchTitles);

      // Verify no outstanding requests after test completes
      httpTestingController.verify();
    });
  });
});
