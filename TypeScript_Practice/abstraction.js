var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// base class
var course = /** @class */ (function () {
    function course(courseName) {
        this.courseName = courseName;
    }
    return course;
}());
// concrete class
var OnlineCourse = /** @class */ (function (_super) {
    __extends(OnlineCourse, _super);
    function OnlineCourse(courseName, platform) {
        var _this = _super.call(this, courseName) || this;
        _this.platform = platform;
        return _this;
    }
    OnlineCourse.prototype.getCourseInfo = function () {
        return "".concat(this.courseName, " is available on ").concat(this.platform);
    };
    return OnlineCourse;
}(course));
var details = new OnlineCourse("Web development", "Graphix");
console.log(details.getCourseInfo());
