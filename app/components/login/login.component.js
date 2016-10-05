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
var router_1 = require("@angular/router");
var page_1 = require('ui/page');
var platform_1 = require("platform");
var login_service_1 = require('./login.service');
var user_factory_1 = require('../../factories/user.factory');
var LoginComponent = (function () {
    function LoginComponent(_router, _page, _loginService, _userFactory) {
        this._router = _router;
        this._page = _page;
        this._loginService = _loginService;
        this._userFactory = _userFactory;
        this._page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.heightDIPs = platform_1.screen.mainScreen.heightDIPs;
        this.widthDIPs = platform_1.screen.mainScreen.widthDIPs;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._page.animate({
            translate: { x: -this._page.getMeasuredHeight(), y: 0 },
            duration: 300
        })
            .then(function () { _this._router.navigate(['/main']); });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this._page.animate({
            translate: { x: this._page.getMeasuredHeight(), y: 0 },
            duration: 300
        })
            .then(function () { _this._router.navigate(['/signup']); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.template.html',
            styleUrls: ['./login.css'],
            directives: [],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, login_service_1.LoginService, user_factory_1.UserFactory])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0QsZUFDL0QsQ0FBQyxDQUQ2RTtBQUM5RSx1QkFBdUIsaUJBQ3ZCLENBQUMsQ0FEdUM7QUFDeEMscUJBQW1CLFNBQ25CLENBQUMsQ0FEMkI7QUFDNUIseUJBQXFCLFVBQ3JCLENBQUMsQ0FEOEI7QUFFL0IsOEJBQTJCLGlCQUMzQixDQUFDLENBRDJDO0FBQzVDLDZCQUEwQiw4QkFFMUIsQ0FBQyxDQUZ1RDtBQVd4RDtJQU1BLHdCQUFxQixPQUF1QixFQUN2QixLQUFxQixFQUNyQixhQUE2QixFQUM5QixZQUEyQjtRQUgxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0lBQ3JDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUE7SUFDaEQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFPQztRQUxPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1IsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdkQsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQzthQUNBLElBQUksQ0FBQyxjQUFRLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBUUM7UUFORyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0RCxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFM0QsQ0FBQztJQTdDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDMUIsVUFBVSxFQUFFLEVBQUU7WUFDZCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O3NCQUFBO0lBdUNGLHFCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxzQkFBYyxpQkFxQzFCLENBQUEifQ==