import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpemployeeComponent } from './httpemployee.component';

describe('HttpemployeeComponent', () => {
  let component: HttpemployeeComponent;
  let fixture: ComponentFixture<HttpemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
