const str = "This Is JavaScript Code"
    // output = "sihT sI tpircSavaJ edoC"

const reversedStr = str.split(" ").map((str)=>str
    .split("").reverse("").join("")).toString().replaceAll(",", " ")
    console.log(reversedStr);

