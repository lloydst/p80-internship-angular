import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEntranceComponent } from './entrance.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AdminEntranceComponent', () => {
  let component:  AdminEntranceComponent;
  let fixture: ComponentFixture< AdminEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AdminEntranceComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AdminEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
