import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
var DebounceObservableComponent = /** @class */ (function () {
    function DebounceObservableComponent() {
        this.name1 = '';
        this.name2 = '';
    }
    DebounceObservableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var input1 = fromEvent(this.input1.nativeElement, 'keyup').pipe(debounceTime(200));
        var input2 = fromEvent(this.input2.nativeElement, 'keyup').pipe(debounceTime(200));
        this.inputSubscription = input1
            .pipe(switchMap(function (event1) {
            _this.name1 = event1.target.value;
            return input2;
        }))
            .subscribe(function (event2) {
            _this.name2 = event2.target.value;
        });
    };
    DebounceObservableComponent.prototype.ngOnDestroy = function () {
        this.inputSubscription && this.inputSubscription.unsubscribe();
    };
    tslib_1.__decorate([
        ViewChild('input1'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DebounceObservableComponent.prototype, "input1", void 0);
    tslib_1.__decorate([
        ViewChild('input2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DebounceObservableComponent.prototype, "input2", void 0);
    DebounceObservableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-debounce-observable',
            templateUrl: './debounce-observable.component.html',
            styleUrls: ['./debounce-observable.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DebounceObservableComponent);
    return DebounceObservableComponent;
}());
export { DebounceObservableComponent };
//# sourceMappingURL=debounce-observable.component.js.map