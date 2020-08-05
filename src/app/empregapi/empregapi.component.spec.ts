import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregapiComponent } from './empregapi.component';

describe('EmpregapiComponent', () => {
  let component: EmpregapiComponent;
  let fixture: ComponentFixture<EmpregapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
