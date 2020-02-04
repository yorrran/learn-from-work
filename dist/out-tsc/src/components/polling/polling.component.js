import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { switchMap, filter, takeUntil } from "rxjs/operators";
import { interval, BehaviorSubject } from "rxjs";
import { HttpClientService } from "src/services/http-client.service";
var PollingComponent = /** @class */ (function () {
    function PollingComponent(httpClientService) {
        this.httpClientService = httpClientService;
        this.completed$ = new BehaviorSubject(0);
    }
    PollingComponent.prototype.ngOnInit = function () { };
    PollingComponent.prototype.handlePolling = function () {
        var _this = this;
        console.log("polling");
        this.pollingSubscription = interval(1000)
            .pipe(switchMap(function () { return _this.httpClientService.getUpdating(); }), takeUntil(this.completed$.pipe(filter(function (value) { return value === 10; }))))
            .subscribe(function () {
            var currCompleted = _this.completed$.value;
            _this.completed$.next(currCompleted + 1);
        });
    };
    PollingComponent.prototype.ngOnDestroy = function () {
        this.pollingSubscription.unsubscribe();
        this.completed$.next(0);
    };
    PollingComponent = tslib_1.__decorate([
        Component({
            selector: "app-polling",
            templateUrl: "./polling.component.html",
            styleUrls: ["./polling.component.scss"],
            providers: [HttpClientService]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], PollingComponent);
    return PollingComponent;
}());
export { PollingComponent };
//# sourceMappingURL=polling.component.js.map