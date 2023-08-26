import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireetivaNgclassComponent } from './direetiva-ngclass.component';

describe('DireetivaNgclassComponent', () => {
  let component: DireetivaNgclassComponent;
  let fixture: ComponentFixture<DireetivaNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireetivaNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireetivaNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
