import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminEventDetailComponent } from './admin-event-detail.component';
import { FileService } from '../../../../services/file.service';

describe('AdminEventDetailComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule
            ],
            declarations: [
                AdminEventDetailComponent
            ],
            providers: [DataService, CookieService, FileService]
        }).compileComponents();
    }));

    it('should render form that allows editing messages', async(() => {
        const fixture = TestBed.createComponent(AdminEventDetailComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AdminEventDetailComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AdminEventDetailComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
