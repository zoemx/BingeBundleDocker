// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvListComponent } from './tv-list.component';
import { MovieApiService } from '../../services/tmdb-api-service';
import { TVTitle } from '../../../interfaces/streaming-Service';

describe('TvListComponent', () => {
  let component: TvListComponent;
  let fixture: ComponentFixture<TvListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let movieApiService: MovieApiService;
  //TODO: make this a component test again
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvListComponent, HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieApiService = TestBed.inject(MovieApiService);
  });

  /*  it('should create', () => {
    expect(component).toBeTruthy();
  }); */

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
  });
});
