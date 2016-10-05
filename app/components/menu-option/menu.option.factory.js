"use strict";
var MenuOptionFactory = (function () {
    function MenuOptionFactory(id, title, display, icon, navigateTo, isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        this.id = id;
        this.title = title;
        this.display = display;
        this.icon = icon;
        this.navigateTo = navigateTo;
        this.isEnabled = isEnabled;
    }
    MenuOptionFactory.prototype.navigate = function (_router) {
        _router.navigate([this.navigateTo]);
    };
    return MenuOptionFactory;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuOptionFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5vcHRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUub3B0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBU0ksMkJBQWEsRUFBVSxFQUNWLEtBQWEsRUFDYixPQUFlLEVBQ2YsSUFBWSxFQUNaLFVBQWtCLEVBQ2xCLFNBQXlCO1FBQXpCLHlCQUF5QixHQUF6QixnQkFBeUI7UUFFbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUU5QixDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFVLE9BQWdCO1FBQ3RCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JEO21DQTZCQyxDQUFBIn0=