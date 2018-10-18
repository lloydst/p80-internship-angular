import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventComponent } from './event.component';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                EventComponent
            ],
            providers:[DataService,CookieService]
        }).compileComponents();
    }));

    it('should show a message retrieved from the db', async(() => {
        const fixture = TestBed.createComponent(EventComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(EventComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(EventComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
