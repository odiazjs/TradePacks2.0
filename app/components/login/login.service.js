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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this.baseUrl = 'http://192.168.56.1:9000';
    }
    LoginService.prototype.authenticate = function (dto) {
        var loginDTO = {
            email: dto.email,
            password: dto.password
        };
        this.url = this.baseUrl + '/login';
        return this._http.post(this.url, loginDTO);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUNqQyxDQUFDLENBRCtDO0FBQ2hELHFCQUE2QixlQUM3QixDQUFDLENBRDJDO0FBSzVDO0lBS0ksc0JBQXFCLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSHpCLFlBQU8sR0FBWSwwQkFBMEIsQ0FBQTtJQUtyRCxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFjLEdBQWlCO1FBRTNCLElBQUksUUFBUSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtTQUN6QixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUU5QyxDQUFDO0lBcEJMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFzQmIsbUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLG9CQUFZLGVBcUJ4QixDQUFBIn0=