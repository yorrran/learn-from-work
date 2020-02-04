import { async, TestBed } from '@angular/core/testing';
import { CanvasDrawComponent } from './canvas-draw.component';
describe('CanvasDrawComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CanvasDrawComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CanvasDrawComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=canvas-draw.component.spec.js.map