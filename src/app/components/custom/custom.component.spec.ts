import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomComponent } from './custom.component';
import { EventComponent } from '../event/event.component';
import { TrafficComponent } from '../traffic/traffic.component';
import { FinancialComponent } from '../financial/financial.component';
import { MeetingComponent } from '../meeting/meeting.component';
import { NewsComponent } from '../news/news.component';
import { SupportComponent } from '../support/support.component';
import { WeatherComponent } from '../weather/weather.component';
import { BuildServersComponent } from '../build-servers/build-servers.component';
import { WebsiteLoopComponent } from '../website-loop/website-loop.component';
import { NguiMapModule } from '@ngui/map';

describe('CustomComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NguiMapModule,
            ],
            declarations: [
                CustomComponent,
                EventComponent,
                TrafficComponent,
                EventComponent,
                FinancialComponent,
                MeetingComponent,
                NewsComponent,
                SupportComponent,
                WeatherComponent, 
                BuildServersComponent, 
                WebsiteLoopComponent
            ],
        }).compileComponents();
    }));

    it('should render the components based on what link it has', async(() => {
        const fixture = TestBed.createComponent(CustomComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(CustomComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(CustomComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
