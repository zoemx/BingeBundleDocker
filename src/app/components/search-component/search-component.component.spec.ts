import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentComponent } from './search-component.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;
  let header: HeaderComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponentComponent, HttpClientModule],
      providers: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
