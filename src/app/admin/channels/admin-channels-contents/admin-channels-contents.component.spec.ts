import { TestBed, async } from '@angular/core/testing';
import { AdminChannelsContentsComponent } from './admin-channels-contents.component';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';



describe('AdminChannelsContentsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                FormsModule,
                RouterTestingModule
            ],
            declarations: [
                AdminChannelsContentsComponent
            ],
            providers:[DataService, CookieService]
        }).compileComponents();
    }));

    it('should create the channel layout', async(() => {
        const fixture = TestBed.createComponent(AdminChannelsContentsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AdminChannelsContentsComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AdminChannelsContentsComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
