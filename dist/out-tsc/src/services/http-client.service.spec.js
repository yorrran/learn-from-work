import { TestBed } from '@angular/core/testing';
import { HttpClientService } from './http-client.service';
describe('HttpClientService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HttpClientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-client.service.spec.js.map