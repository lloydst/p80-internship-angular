import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AllComponent } from './all.component';
import { TrafficComponent } from '../traffic/traffic.component';
import { WeatherComponent } from '../weather/weather.component';
import { BuildServersComponent } from '../build-servers/build-servers.component';
import { EventComponent } from '../event/event.component';
import { NewsComponent } from '../news/news.component';
import { SupportComponent } from '../support/support.component';
import { FinancialComponent } from '../financial/financial.component';
import { MeetingComponent } from '../meeting/meeting.component';
import { NguiMapModule } from '@ngui/map';
import { WeatherService } from '../../services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { NewsService } from '../../services/news.service';

describe('AllComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NguiMapModule,
        HttpClientTestingModule
      ],
      declarations: [
        AllComponent,
        TrafficComponent,
        WeatherComponent,
        BuildServersComponent,
        EventComponent,
        NewsComponent,
        SupportComponent,
        FinancialComponent,
        MeetingComponent
      ],
      providers:[
          WeatherService,
          DataService,
          CookieService,
          NewsService,
        ]
    }).compileComponents();
  }));
  
  it('should display all components', async(() => {
    const fixture = TestBed.createComponent(AllComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AllComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AllComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});
