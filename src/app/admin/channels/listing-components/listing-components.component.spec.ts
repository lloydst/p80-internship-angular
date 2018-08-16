import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingComponentsComponent } from './listing-components.component';


describe('ListingComponentsComponent', () => {
  let component: ListingComponentsComponent;
  let fixture: ComponentFixture<ListingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
