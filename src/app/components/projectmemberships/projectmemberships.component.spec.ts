import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmembershipsComponent } from './projectmemberships.component';

describe('ProjectmembershipsComponent', () => {
  let component: ProjectmembershipsComponent;
  let fixture: ComponentFixture<ProjectmembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
