import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingComponentsComponent } from './listing-components.component';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListingComponentsComponent', () => {
  let component: ListingComponentsComponent;
  let fixture: ComponentFixture<ListingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ListingComponentsComponent],
        imports: [HttpClientTestingModule],
        providers: [DataService]
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
