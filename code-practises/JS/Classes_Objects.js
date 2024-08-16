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
        console.log(this.getAge({age:12225}))
        console.log(std)
        return this
    }
}

const newPerson = new Person({name:"test",age:"10"})

const newStudent = new Student({name:"test",age:"10"})

console.log(newPerson.getAge({age:18}));

console.log(newStudent.getAge({age:12}));
console.log(newStudent.getStdName({std:12}));
