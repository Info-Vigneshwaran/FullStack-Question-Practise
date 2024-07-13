class computeAmount {
    constructor(){
        this.value = 0
    }
    hundred(value){
        this.value += (value*100)
        return this
    }
    thousand(value){
        this.value += (value*1000)
        return this
    }
    value2(){
        return this.value
    }
}
const computeAmount1 = new computeAmount().thousand(2).hundred(4).value2()
console.log(computeAmount1);