import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireetivaNgstyleComponent } from './direetiva-ngstyle.component';

describe('DireetivaNgstyleComponent', () => {
  let component: DireetivaNgstyleComponent;
  let fixture: ComponentFixture<DireetivaNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireetivaNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireetivaNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
