export class Student{
    public name: string;
    public grade: string;
    public phone: string;
    public address: string;
    public email: string;
    constructor(name:string,grade:string,phone:string, address: string, email: string) {
        this.name = name;
        this.grade = grade;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
}