import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChannelsComponent } from './channels.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';

describe('ChannelsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        ChannelsComponent
      ],
      providers:[DataService,CookieService]
    }).compileComponents();
  }));
  
  it('should render the landing page aka channel select', async(() => {
    const fixture = TestBed.createComponent(ChannelsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(ChannelsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ChannelsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});
