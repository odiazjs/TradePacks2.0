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
var page_1 = require("ui/page");
var core_1 = require('@angular/core');
var currency_pipe_1 = require('../../util/pipes/currency.pipe');
var user_service_1 = require('./user.service');
var user_factory_1 = require('../../factories/user.factory');
var UserInfoComponent = (function () {
    function UserInfoComponent(page, user, _userService) {
        this.page = page;
        this.user = user;
        this._userService = _userService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser()
            .then(function (_userFactory) {
            _this.user = _userFactory;
        });
    };
    UserInfoComponent.prototype.goToAvatar = function () {
        var avatar = this.page.getViewById('avatar');
        avatar.animate({
            scale: { x: 1.2, y: 1.2 },
            duration: 100,
            iterations: 2
        })
            .then(function () {
            avatar.animate({
                scale: { x: 1.0, y: 1.0 },
                duration: 50
            });
        });
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-info',
            templateUrl: './user.info.template.html',
            styleUrls: ['./user.info.css'],
            providers: [],
            pipes: [currency_pipe_1.CoinsPipe]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [page_1.Page, user_factory_1.UserFactory, user_service_1.UserService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIuaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUc3QixxQkFBc0UsZUFDdEUsQ0FBQyxDQURvRjtBQUNyRiw4QkFBd0IsZ0NBQ3hCLENBQUMsQ0FEdUQ7QUFDeEQsNkJBQTBCLGdCQUMxQixDQUFDLENBRHlDO0FBQzFDLDZCQUEwQiw4QkFFMUIsQ0FBQyxDQUZ1RDtBQVl4RDtJQUVJLDJCQUFxQixJQUFXLEVBQ1osSUFBa0IsRUFDakIsWUFBMEI7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNaLFNBQUksR0FBSixJQUFJLENBQWM7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFL0MsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFDLFlBQTBCO1lBQzdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUVNLHNDQUFVLEdBQWpCO1FBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUUsR0FBRztZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUM7YUFDRyxJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDekIsUUFBUSxFQUFFLEVBQUU7YUFDZixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVkLENBQUM7SUExQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFHLEVBQUU7WUFDZCxLQUFLLEVBQUUsQ0FBQyx5QkFBUyxDQUFDO1NBQ3JCLENBQUM7UUFFRCxpQkFBVSxFQUFFOzt5QkFBQTtJQW1DYix3QkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1kseUJBQWlCLG9CQWtDN0IsQ0FBQSJ9