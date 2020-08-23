import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcrudComponent } from './qcrud.component';

describe('QcrudComponent', () => {
  let component: QcrudComponent;
  let fixture: ComponentFixture<QcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
