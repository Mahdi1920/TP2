import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp3Parti1Component } from './tp3-parti1.component';

describe('Tp3Parti1Component', () => {
  let component: Tp3Parti1Component;
  let fixture: ComponentFixture<Tp3Parti1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp3Parti1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp3Parti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
