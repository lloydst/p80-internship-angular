import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildServersComponent } from './build-servers.component';

describe('BuildServersComponent', () => {
  let component: BuildServersComponent;
  let fixture: ComponentFixture<BuildServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
