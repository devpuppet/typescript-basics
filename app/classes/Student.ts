import { Title } from "../decorators/Title";

export default class Student {

    constructor(private lastName: string, private firstName: string) {
    }

@Title("Mr")
getFullName(): string {
    return this.firstName + " " + this.lastName;
}

}