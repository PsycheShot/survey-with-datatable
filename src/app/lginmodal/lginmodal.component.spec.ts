import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LginmodalComponent } from './lginmodal.component';

describe('LginmodalComponent', () => {
  let component: LginmodalComponent;
  let fixture: ComponentFixture<LginmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LginmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LginmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
