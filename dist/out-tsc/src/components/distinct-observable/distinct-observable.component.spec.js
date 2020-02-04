import { async, TestBed } from '@angular/core/testing';
import { DistinctObservableComponent } from './distinct-observable.component';
describe('DistinctObservableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DistinctObservableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DistinctObservableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=distinct-observable.component.spec.js.map