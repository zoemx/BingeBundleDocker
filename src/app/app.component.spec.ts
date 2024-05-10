import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MovieApiService } from './services/tmdb-api-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const mockHttpHandler = null;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, BrowserAnimationsModule],
      providers: [
        MovieApiService,
        HttpClient,
        { provide: HttpHandler, useValue: mockHttpHandler },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*   it(`should have the 'binge-bundler' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('binge-bundler');
  }); */

  it('should render TVSHOWS section title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.movie-section-title')?.textContent).toContain('MOVIES');
  });

  it('should render Movie section title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.tv-section-title')?.textContent).toContain('TV SHOWS');
  });
});
