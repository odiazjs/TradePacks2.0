"use strict";
var router_1 = require('nativescript-angular/router');
var login_component_1 = require('./components/login/login.component');
var main_menu_component_1 = require('./components/main-menu/main.menu.component');
var browse_packs_component_1 = require('./components/browse-packs/browse.packs.component');
var signup_component_1 = require('./components/signup/signup.component');
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "signup", component: signup_component_1.SignupComponent },
    { path: "main", component: main_menu_component_1.MainMenuComponent },
    { path: "browsepacks", component: browse_packs_component_1.BrowsePacksComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVCQUE4Qiw2QkFDOUIsQ0FBQyxDQUQwRDtBQUMzRCxnQ0FBNkIsb0NBQzdCLENBQUMsQ0FEZ0U7QUFDakUsb0NBQWdDLDRDQUNoQyxDQUFDLENBRDJFO0FBQzVFLHVDQUFtQyxrREFDbkMsQ0FBQyxDQURvRjtBQUNyRixpQ0FBOEIsc0NBRTlCLENBQUMsQ0FGbUU7QUFFdkQsY0FBTSxHQUFpQjtJQUVsQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtDQUV6RCxDQUFBO0FBRVksNEJBQW9CLEdBQUc7SUFDbEMsd0JBQWUsQ0FBQyxjQUFNLEVBQUUsRUFBRSxDQUFDO0NBQzVCLENBQUEifQ==