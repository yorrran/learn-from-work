import { async, TestBed } from '@angular/core/testing';
import { MergeObservableComponent } from '../merge-observable/merge-observable.component';
describe('MergeObservableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MergeObservableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MergeObservableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=merge-observable.component.spec.js.map