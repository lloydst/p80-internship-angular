import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSideNavComponent } from './admin-side-nav.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('AdminSideNavComponent', () => {
  let component: AdminSideNavComponent;
  let fixture: ComponentFixture<AdminSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSideNavComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
