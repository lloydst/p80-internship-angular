import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceComponent } from './entrance.component';
import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../../services/data.service';

@Component({selector: 'traffic-layer', template: ''})
class TrafficLayerComponent {}
@Component({selector: 'ngui-map', template: ''})
class nguiMapComponent {}
@Component({selector: 'app-weather', template: ''})
class WeatherComponent {}
@Component({selector: 'app-event', template: ''})
class EventComponent {}
describe('EntranceComponent', () => {
  let component: EntranceComponent;
  let fixture: ComponentFixture<EntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ 
        EntranceComponent,
        TrafficLayerComponent,
        nguiMapComponent,
        EventComponent,
      WeatherComponent ],
      providers:[NewsService,
        DataService,
      HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
