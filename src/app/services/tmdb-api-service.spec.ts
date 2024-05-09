import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieApiService } from './tmdb-api-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TVTitle } from '../../interfaces/streaming-Service';

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

    beforeEach(() => {
      //movieApiService = TestBed.inject(MovieApiService);
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
      movieApiService.getHomepageTVTitles(1).subscribe({
        next: (tvTitles) =>
          expect(tvTitles).toEqual(
            expectedTvTitles,
            'should return expected tv titles'
          ),
        error: fail,
      });

      // Expect one request to the API with the correct URL and parameters
      const req = httpTestingController.expectOne(
        'https://api.themoviedb.org/3/tv/popular?page=1&limit=100' // Assuming these are the expected parameters
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
});

/* let component: TvListComponent;
let fixture: ComponentFixture<TvListComponent>;



beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [TvListComponent,
    HttpClientTestingModule
    ],
  })//.compileComponents();
 */
//separating these two does not change hasOwnProperty error
/* TestBed.configureTestingModule({
    // Import the HttpClient mocking services
    imports: [HttpClientTestingModule],
    // Provide the service-under-test and its dependencies
    // providers: [movieApiService],
  }); */

/*   fixture = TestBed.createComponent(TvListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges(); */

// Inject the http, test controller, and service-under-test
/*   // as they will be referenced by each test.
  httpClient = TestBed.inject(HttpClient);
  httpTestingController = TestBed.inject(HttpTestingController);
  movieApiService = TestBed.inject(MovieApiService);
});
 */

/*  it('should create', () => {
  expect(component).toBeTruthy();
}); */
