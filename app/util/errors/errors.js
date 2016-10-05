"use strict";
var types_1 = require('../../types');
var Errors = (function () {
    function Errors() {
        this.collection = new Map();
        this.list = new Array();
    }
    Errors.prototype.clear = function () {
        if (this.collection.size > 0) {
            this.collection.clear();
        }
        if (this.list.length > 0) {
            this.list = new Array();
        }
    };
    Errors.prototype.setForSignup = function () {
        var signupDto = new types_1.SignupDTO();
        this.collection.set('email', 'Invalid email address.');
        this.collection.set('password', 'Password must be at least 6 characters.');
        this.collection.set('passwordRepeat', "Password doesn't match.");
        this.collection.set('username', 'Username must be at least 4 characters.');
    };
    Errors.prototype.add = function (key) {
        var message = this.collection.get(key);
        this.list.push(message);
    };
    return Errors;
}());
exports.Errors = Errors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBd0IsYUFFeEIsQ0FBQyxDQUZvQztBQUVyQztJQUtJO1FBSFEsZUFBVSxHQUEwQixJQUFJLEdBQUcsRUFBa0IsQ0FBQTtRQUM5RCxTQUFJLEdBQWlDLElBQUksS0FBSyxFQUFVLENBQUE7SUFJL0QsQ0FBQztJQUVNLHNCQUFLLEdBQVo7UUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDM0IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFBO1FBQ25DLENBQUM7SUFFTCxDQUFDO0lBRU0sNkJBQVksR0FBbkI7UUFFQSxJQUFJLFNBQVMsR0FBZSxJQUFJLGlCQUFTLEVBQUUsQ0FBQTtRQUV2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUseUNBQXlDLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFBO0lBRTlFLENBQUM7SUFFTSxvQkFBRyxHQUFWLFVBQVksR0FBWTtRQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksY0FBTSxTQW1DbEIsQ0FBQSJ9