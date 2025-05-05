// base class
abstract class course{
    constructor(protected courseName:string) {
    }
    abstract getCourseInfo():string;
}

// concrete class
class OnlineCourse extends course{
    constructor(courseName:string, private platform:string) {
        super(courseName);
    }

    getCourseInfo(): string {
        return `${this.courseName} is available on ${this.platform}`
    }
}

const details = new OnlineCourse("Web development", "Graphix")
console.log(details.getCourseInfo());


