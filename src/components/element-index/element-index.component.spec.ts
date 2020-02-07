import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementIndexComponent } from './element-index.component';

describe('ElementIndexComponent', () => {
  let component: ElementIndexComponent;
  let fixture: ComponentFixture<ElementIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
