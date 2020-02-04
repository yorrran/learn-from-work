import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpClientService.prototype.getUpdating = function () {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
    };
    HttpClientService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HttpClientService);
    return HttpClientService;
}());
export { HttpClientService };
//# sourceMappingURL=http-client.service.js.map