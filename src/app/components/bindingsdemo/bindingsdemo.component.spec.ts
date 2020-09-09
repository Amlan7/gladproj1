import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsdemoComponent } from './bindingsdemo.component';

describe('BindingsdemoComponent', () => {
  let component: BindingsdemoComponent;
  let fixture: ComponentFixture<BindingsdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
