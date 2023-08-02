console.log("Hello World");
console.log("Hello World");
let input_box = document.getElementById("input")
console.log(input_box)
input_box.addEventListener("input",converter);
input_box.addEventListener("click",(e)=>{console.log("23")});
let x = 5;
let y = "hi";
let z = [1,2,3];
const a = 5;
x += 2;
y += "!";
z.push(6);
console.log(x,y,z);

function converter(e){
    console.log(input_box.value);
    let output_box = document.getElementById("Output");
    let dollarAmount = parseFloat("0" + input_box.value);
    dollarAmount = dollarAmount * .9;
    output_box.innerText = "Euro = " + Math.round(dollarAmount * 100) / 100;

}
let example_function = ()=> {console.log("789")};

example_function();
example_function = () => {console.log("657")};
example_function();
