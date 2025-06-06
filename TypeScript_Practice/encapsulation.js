var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
        else {
            console.log("Please enter a valid age!!");
        }
    };
    Student.prototype.getStudentInfo = function () {
        return "Student name : ".concat(this.name, " and age is : ").concat(this.age);
    };
    return Student;
}());
var std = new Student("John", 23);
console.log(std.getStudentInfo());
console.log(std.getName());
std.setName("Smith");
std.setAge(-21);
console.log(std.getStudentInfo());
