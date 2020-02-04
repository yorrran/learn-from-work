import { async, TestBed } from '@angular/core/testing';
import { DebounceObservableComponent } from '../debounce-observable/debounce-observable.component';
describe('DebounceObservableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DebounceObservableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DebounceObservableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=debounce-observable.component.spec.js.map