import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
var CanvasDrawComponent = /** @class */ (function () {
    function CanvasDrawComponent() {
    }
    CanvasDrawComponent.prototype.ngOnInit = function () { };
    CanvasDrawComponent.prototype.ngAfterViewInit = function () {
        this.context = this.canvasEl
            .nativeElement.getContext('2d');
        this.draw();
        this.ctrx = this.canvasDraw.nativeElement.getContext('2d');
        this.rect();
    };
    CanvasDrawComponent.prototype.draw = function () {
        this.context.font = '30px Arial';
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';
        var x = this.canvasEl.nativeElement.width / 2;
        var y = this.canvasEl.nativeElement.height / 2;
        this.context.fillStyle = "blue";
        this.context.fillRect(0, 0, x * 2, y * 2);
        this.context.fillStyle = "black";
        this.context.fillText('canvas', x, y);
    };
    CanvasDrawComponent.prototype.rect = function () {
        this.ctrx.fillRect(25, 25, 100, 100);
        this.ctrx.clearRect(45, 45, 60, 60);
    };
    tslib_1.__decorate([
        ViewChild('canvasEl'),
        tslib_1.__metadata("design:type", ElementRef)
    ], CanvasDrawComponent.prototype, "canvasEl", void 0);
    tslib_1.__decorate([
        ViewChild('canvasDraw'),
        tslib_1.__metadata("design:type", ElementRef)
    ], CanvasDrawComponent.prototype, "canvasDraw", void 0);
    CanvasDrawComponent = tslib_1.__decorate([
        Component({
            selector: 'app-canvas-draw',
            templateUrl: './canvas-draw.component.html',
            styleUrls: ['./canvas-draw.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CanvasDrawComponent);
    return CanvasDrawComponent;
}());
export { CanvasDrawComponent };
//# sourceMappingURL=canvas-draw.component.js.map