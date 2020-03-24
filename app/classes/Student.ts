export default class Student {

    constructor(private lastName: string, private firstName: string) {
    }

getFullName(): string {
    return this.firstName + " " + this.lastName;
}

}