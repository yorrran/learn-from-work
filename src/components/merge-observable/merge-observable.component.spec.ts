import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeObservableComponent } from '../merge-observable/merge-observable.component';

describe('MergeObservableComponent', () => {
  let component: MergeObservableComponent;
  let fixture: ComponentFixture<MergeObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
