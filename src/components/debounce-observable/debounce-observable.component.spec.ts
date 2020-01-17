import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceObservableComponent } from '../debounce-observable/debounce-observable.component';

describe('DebounceObservableComponent', () => {
  let component: DebounceObservableComponent;
  let fixture: ComponentFixture<DebounceObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
