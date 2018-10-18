import { TestBed, async } from '@angular/core/testing';
import { ChannelContentComponent } from './channel-content.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { DataService } from '../../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChannelContentComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                SortablejsModule,
                HttpClientTestingModule
            ],
            declarations: [
                ChannelContentComponent
            ],
            providers:[DataService,CookieService]
        }).compileComponents();
    }));

    it('should show a form to edit a channel', async(() => {
        const fixture = TestBed.createComponent(ChannelContentComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(ChannelContentComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(ChannelContentComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
