import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminSideNavComponent } from './admin-side-nav.component';

describe('AdminSideNavComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AdminSideNavComponent
            ],
        }).compileComponents();
    }));
    
    it('should create the sidenav', async(() => {
      const fixture = TestBed.createComponent(AdminSideNavComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AdminSideNavComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AdminSideNavComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    */
});