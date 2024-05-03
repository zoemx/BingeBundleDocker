import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [TvListComponent, HttpClientTestingModule,],
      // Provide the service-under-test and its dependencies
      providers: [movieApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(TvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieApiService = TestBed.inject(MovieApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getTvTitles', async () => {
    let expectedTvTitles: TVTitle[];

    beforeEach(() => {
      movieApiService = TestBed.inject(MovieApiService);
      expectedTvTitles = [
        { id: 1, name: 'A', poster_path: '/poster' },
        { id: 2, name: 'B', poster_path: '/poster' },
      ] as TVTitle[];
    });

    it('should return expected tv titles (called once)', () => {
      movieApiService.getHomepageTVTitles().subscribe({
        next: (tvTitles) =>
          expect(tvTitles).toEqual(
            expectedTvTitles,
            'should return expected tv titles'
          ),
        error: fail,
      });

      // MovieService should have made one request to GET tv titles from expected URL
      const req = httpTestingController.expectOne('https://api.themoviedb.org/3/tv/popular');
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedTvTitles);
    });
  });
});
