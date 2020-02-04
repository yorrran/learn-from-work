import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
var DistinctObservableComponent = /** @class */ (function () {
    function DistinctObservableComponent() {
        this.scrollPos = [];
    }
    DistinctObservableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollSubscription = fromEvent(window, 'scroll')
            .pipe(throttleTime(100))
            .subscribe(function (item) {
            var scrollNum = document.documentElement.scrollTop;
            _this.scrollPos.push(scrollNum);
        });
    };
    DistinctObservableComponent.prototype.cleanScroll = function () {
        this.scrollPos = [];
    };
    DistinctObservableComponent.prototype.ngOnDestroy = function () {
        this.scrollSubscription.unsubscribe();
    };
    DistinctObservableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-distinct-observable',
            templateUrl: './distinct-observable.component.html',
            styleUrls: ['./distinct-observable.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DistinctObservableComponent);
    return DistinctObservableComponent;
}());
export { DistinctObservableComponent };
//# sourceMappingURL=distinct-observable.component.js.map