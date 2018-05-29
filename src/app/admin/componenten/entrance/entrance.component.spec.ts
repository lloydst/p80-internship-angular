import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntranceComponent } from './entrance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EntranceComponent', () => {
  let component: AdminEntranceComponent;
  let fixture: ComponentFixture<AdminEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntranceComponent ],
      imports:[ReactiveFormsModule,
      RouterTestingModule,
      HttpClientTestingModule
    ],
      providers:[DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
