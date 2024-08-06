class Car{
    constructor (props){
        const {name='',year=''} = {...props}
        this.name = name
        this.year = year
    }
    EngineModel(model){
        this.model= model
        return this
    }
} 

// const newCar = new Car({name:"BMW",year:"2020"})

class extendCar extends Car{
    constructor(name,year,model){
        super(name,year,model)
    }
    ModelWithCC(cc= ''){
        this.cc = cc 
        return this
    }
}
// console.log(newCar.EngineModel("test"))

const CarWithCC = new extendCar({name:"testee",year:"111"})
console.log(CarWithCC.ModelWithCC("1010").EngineModel("1212"))