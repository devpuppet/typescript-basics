interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // let courseGoal: CourseGoal = {}; // TS won't let you do that because {} object doesn't contain necessary properties. You have to use Partial which wraps all properties as optional
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; // in the end, you have to cast from Partial to the desired type
}