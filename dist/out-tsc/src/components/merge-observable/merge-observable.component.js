import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, delay, map } from 'rxjs/operators';
var MergeObservableComponent = /** @class */ (function () {
    function MergeObservableComponent() {
        this.clickedLocations = [];
    }
    MergeObservableComponent.prototype.ngOnInit = function () { };
    MergeObservableComponent.prototype.mergeObservables = function () {
        var _this = this;
        this.mergeSubscription = of('x', 'y')
            .pipe(mergeMap(function (e) {
            return of(1, 2).pipe(delay(5000), map(function (num) { return e + num; }));
        }))
            .subscribe(function (item) { return _this.clickedLocations.push(item); });
    };
    MergeObservableComponent.prototype.ngOnDestroy = function () {
        this.mergeSubscription.unsubscribe();
    };
    MergeObservableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-merge-observable',
            templateUrl: './merge-observable.component.html',
            styleUrls: ['./merge-observable.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MergeObservableComponent);
    return MergeObservableComponent;
}());
export { MergeObservableComponent };
//# sourceMappingURL=merge-observable.component.js.map