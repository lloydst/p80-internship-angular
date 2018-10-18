import { TestBed, async } from '@angular/core/testing';
import { ChannelNewComponent } from './channel-new.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SortablejsModule } from 'angular-sortablejs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../services/data.service';
import { CookieService } from 'ngx-cookie-service';

describe('ChannelNewComponent', () => {
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
                ChannelNewComponent
            ],
            providers:[DataService,CookieService]
        }).compileComponents();
    }));

    it('should show a form to create a new channel', async(() => {
        const fixture = TestBed.createComponent(ChannelNewComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(ChannelNewComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(ChannelNewComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
