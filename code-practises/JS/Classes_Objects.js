class Person {
    constructor(props) {
        const {name=''} ={...props}
        this.name = name
        this.user = ''
    }

    getAge({age=''}){
        this.user = `${this.name} - ${age}`
        return this
    }
}

class Student extends Person {
    constructor(name,age) {
        super(name,age)
    }
    getStdName({std}){
        console.log(this.name)
        console.log(std)
        return this
    }
}

const newStudent = new Student({name:"test",age:"10"})

console.log(newStudent.getAge({age:12}));
console.log(newStudent.getStdName({std:12}));
