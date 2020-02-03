import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctObservableComponent } from './distinct-observable.component';

describe('DistinctObservableComponent', () => {
  let component: DistinctObservableComponent;
  let fixture: ComponentFixture<DistinctObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
