import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketObservableComponent } from './websocket-observable.component';

describe('WebsocketObservableComponent', () => {
  let component: WebsocketObservableComponent;
  let fixture: ComponentFixture<WebsocketObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
