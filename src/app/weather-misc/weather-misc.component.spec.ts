import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMiscComponent } from './weather-misc.component';

describe('WeatherMiscComponent', () => {
  let component: WeatherMiscComponent;
  let fixture: ComponentFixture<WeatherMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
