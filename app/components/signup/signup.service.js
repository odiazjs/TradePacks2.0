"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var SignupService = (function () {
    function SignupService(_http) {
        this._http = _http;
        this.baseUrl = 'http://192.168.56.1:9000';
    }
    SignupService.prototype.signup = function (dto) {
        this.url = this.baseUrl + '/signup';
        return this._http.post(this.url, dto).map(function (response) {
            return response;
        });
    };
    SignupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEscUJBQTZCLGVBQzdCLENBQUMsQ0FEMkM7QUFDNUMscUJBQWlDLGVBRWpDLENBQUMsQ0FGK0M7QUFHaEQ7SUFLSSx1QkFBcUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFIekIsWUFBTyxHQUFZLDBCQUEwQixDQUFBO0lBS3JELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQVEsR0FBZTtRQUVuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFBO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQW1CO1lBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQWhCTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBa0JiLG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxxQkFBYSxnQkFpQnpCLENBQUEifQ==