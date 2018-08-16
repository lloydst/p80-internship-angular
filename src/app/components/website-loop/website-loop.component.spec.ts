import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { WebsiteLoopComponent } from './website-loop.component';
import { DataService } from '../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WebsiteLoopComponent', () => {
  let component: WebsiteLoopComponent;
  let fixture: ComponentFixture<WebsiteLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteLoopComponent ],
      providers:[DataService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
