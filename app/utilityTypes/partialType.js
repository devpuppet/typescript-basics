function createCourseGoal(title, description, date) {
    // let courseGoal: CourseGoal = {}; // TS won't let you do that because {} object doesn't contain necessary properties. You have to use Partial which wraps all properties as optional
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal; // in the end, you have to cast from Partial to the desired type
}
//# sourceMappingURL=partialType.js.map