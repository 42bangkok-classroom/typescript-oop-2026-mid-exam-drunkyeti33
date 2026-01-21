// Write your code below
const fizz = Number(process.argv[2])
for(let i = 1; i < fizz+1; i++){
    if(i%3===0 && i%5===0){console.log("FizzBuzz")}
    else if(i%5===0){console.log("Buzz")}
    else if(i%3===0){console.log("Fizz")}
    else{
    console.log(i)}
}