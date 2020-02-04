import * as tslib_1 from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PollingComponent } from "../components/polling/polling.component";
import { HttpClientModule } from "@angular/common/http";
import { DebounceObservableComponent } from "src/components/debounce-observable/debounce-observable.component";
import { FormsModule } from "@angular/forms";
import { MergeObservableComponent } from '../components/merge-observable/merge-observable.component';
import { DistinctObservableComponent } from '../components/distinct-observable/distinct-observable.component';
import { CanvasDrawComponent } from '../components/canvas-draw/canvas-draw.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent, PollingComponent, DebounceObservableComponent, MergeObservableComponent, DistinctObservableComponent, CanvasDrawComponent],
            imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map