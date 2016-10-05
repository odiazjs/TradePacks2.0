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
var signup_factory_1 = require('../../components/signup/signup.factory');
var user_factory_1 = require('../../factories/user.factory');
var errors_1 = require('../../util/errors/errors');
var SignupComponent = (function () {
    function SignupComponent(_router, _page, _userFactory, _signupFactory) {
        this._router = _router;
        this._page = _page;
        this._userFactory = _userFactory;
        this._signupFactory = _signupFactory;
        this.isRegistering = false;
        this._page.actionBarHidden = true;
        this.errors = new errors_1.Errors();
        this.errors.clear();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        this._userFactory.register()
            .subscribe(function (ok) {
            if (ok) {
                _this.isRegistering = false;
                _this._router.navigate(['/']);
            }
            else {
                var signup_1 = _this._page.getViewById('signup');
                signup_1.animate({
                    translate: { x: 5, y: 0 },
                    duration: 125,
                    iterations: 4
                })
                    .then(function () { signup_1.translateX = 0; });
            }
        });
    };
    SignupComponent.prototype.cancel = function () {
        var _this = this;
        this._page.animate({
            translate: { x: -this._page.getMeasuredHeight(), y: 0 },
            duration: 300
        })
            .then(function () { _this._router.navigate(['/']); });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: './signup.template.html',
            styleUrls: ['./signup.css'],
            directives: [],
            providers: []
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, user_factory_1.UserFactory, signup_factory_1.SignupFactory])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUMvRCxDQUFDLENBRDZFO0FBQzlFLHVCQUFxQixpQkFDckIsQ0FBQyxDQURxQztBQUN0QyxxQkFBbUIsU0FDbkIsQ0FBQyxDQUQyQjtBQUc1QiwrQkFBNEIsd0NBQzVCLENBQUMsQ0FEbUU7QUFDcEUsNkJBQTBCLDhCQUMxQixDQUFDLENBRHVEO0FBQ3hELHVCQUFxQiwwQkFFckIsQ0FBQyxDQUY4QztBQVkvQztJQUtJLHlCQUFxQixPQUF3QixFQUN4QixLQUFzQixFQUN0QixZQUE2QixFQUM3QixjQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBTDdDLGtCQUFhLEdBQWEsS0FBSyxDQUFBO1FBT2xDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBaEJHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFDLEVBQVk7WUFDcEIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQTtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLFFBQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDN0MsUUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3pCLFFBQVEsRUFBRSxHQUFHO29CQUNiLFVBQVUsRUFBRSxDQUFDO2lCQUNoQixDQUFDO3FCQUNELElBQUksQ0FBQyxjQUFRLFFBQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDMUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdkQsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQzthQUNELElBQUksQ0FBQyxjQUFRLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzNCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUVELGlCQUFVLEVBQUU7O3VCQUFBO0lBaURiLHNCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSx1QkFBZSxrQkFnRDNCLENBQUEifQ==