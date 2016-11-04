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
var color_1 = require('color');
var platform_1 = require("platform");
var login_service_1 = require('./login.service');
var user_factory_1 = require('../../factories/user.factory');
var nativeElements_1 = require('../../util/nativeElements');
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
        var usernameView = this.usernameView.nativeElement;
        var passwordView = this.passwordView.nativeElement;
        nativeElements_1.setHintColor({ view: usernameView, color: new color_1.Color('#8f9090') });
        nativeElements_1.setHintColor({ view: passwordView, color: new color_1.Color('#8f9090') });
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
    LoginComponent.prototype.socialAuth = function (id) {
        var social = this._page.getViewById(id);
        social.animate({
            scale: { x: 1.2, y: 1.2 },
            duration: 100,
            iterations: 2
        })
            .then(function () {
            social.animate({
                scale: { x: 1.0, y: 1.0 },
                duration: 50
            });
        });
    };
    __decorate([
        core_1.ViewChild("usernameTxt"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "usernameView", void 0);
    __decorate([
        core_1.ViewChild("passwordTxt"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "passwordView", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkUsZUFDN0UsQ0FBQyxDQUQyRjtBQUM1Rix1QkFBdUIsaUJBQ3ZCLENBQUMsQ0FEdUM7QUFDeEMscUJBQXFCLFNBQ3JCLENBQUMsQ0FENkI7QUFDOUIsc0JBQXNCLE9BQ3RCLENBQUMsQ0FENEI7QUFFN0IseUJBQXVCLFVBQ3ZCLENBQUMsQ0FEZ0M7QUFFakMsOEJBQTJCLGlCQUMzQixDQUFDLENBRDJDO0FBQzVDLDZCQUEwQiw4QkFDMUIsQ0FBQyxDQUR1RDtBQUN4RCwrQkFBNkIsMkJBRTdCLENBQUMsQ0FGdUQ7QUFXeEQ7SUFRQSx3QkFBcUIsT0FBdUIsRUFDdkIsS0FBcUIsRUFDckIsYUFBNkIsRUFDOUIsWUFBMkI7UUFIMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtJQUVyQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFBO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO1FBQzVDLElBQUksWUFBWSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFBO1FBQzdELElBQUksWUFBWSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFBO1FBQzdELDZCQUFZLENBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFFLENBQUE7UUFDbkUsNkJBQVksQ0FBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUUsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQU9DO1FBTE8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDUixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN2RCxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDO2FBQ0EsSUFBSSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFRQztRQU5HLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3RELFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBUSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUUzRCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFhLEVBQVU7UUFDbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUUsR0FBRztZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUM7YUFDRyxJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDekIsUUFBUSxFQUFFLEVBQUU7YUFDZixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFyREQ7UUFBQyxnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7d0RBQUE7SUFDekI7UUFBQyxnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7d0RBQUE7SUFmN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzFCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDOztzQkFBQTtJQTZERixxQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUEzRFksc0JBQWMsaUJBMkQxQixDQUFBIn0=