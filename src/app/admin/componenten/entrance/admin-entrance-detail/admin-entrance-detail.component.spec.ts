import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminEntranceDetailComponent } from './admin-entrance-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminEntranceDetailComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule
            ],
            declarations: [
                AdminEntranceDetailComponent
            ],
            providers: [DataService,CookieService]
        }).compileComponents();
    }));

    it('should allow for editing of a "client" in the loop component', async(() => {
        const fixture = TestBed.createComponent(AdminEntranceDetailComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AdminEntranceDetailComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AdminEntranceDetailComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});
