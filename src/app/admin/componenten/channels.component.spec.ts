import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminChannelsComponent } from './channels.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageViewComponent } from '../image/image-view/image-view.component';


describe('AdminChannelsComponent', () => {
  let component: AdminChannelsComponent;
  let fixture: ComponentFixture<AdminChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChannelsComponent, ImageViewComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
