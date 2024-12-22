/*
//primitive data types

console.log("Hello Rama");//string
console.log( typeof "Hello");//to know the type 

var username="Rama";//variable (I can use it in any place in my project) , you can use either ""or''but it is better to usw ``
console.log(username);//string
console.log(username + " Alhadeed"); //ctrl+/ to make it comment

var age=23;//number
console.log(age);

var ismarried=false;//boolean
console.log(ismarried);

var firstName=username;// pdt don't change if I changed the original var because it has a copy of it 
console.log(firstName);

username="Sara";
console.log(username);
console.log(firstName);


//non-primitive data types

//arrays
var colors=["red","green","blue",["yellow"]];
var colortwo = [...colors]; //  (ECS6)  //  معناها انا اخدت العناصر لجوى ما الي علاقة بال ريفيرنس  يعني عملتلها اراي جديدة وهاد معناه ما حتتأثر بالأصل
var ages =[15,13];
console.log(colors,ages);
console.log(typeof colors); // object 
console.log(colors[0]);//red
console.log(colors[3][0]);//yellow
colors[0]="black"; // red => black

//objects
var family = {  //key,values
    father:"Bader",
    mother:"Sara",
    children:["Adnan","Mahmoud"],
    address:{
        street:"street 1",
        city:"city 1",
        }
}
console.log(family);
console.log(typeof family);
var family2={...family};
family.father="Mahmoud";
console.log(family);
console.log(family2);
*/

/*
//let vs var:variable declared with var can be accessed anywhere within the current function or global scope, while a variable declared with let can only be accessed within the block it was declared
// const const creates a variable that cannot be reassigned after it has been assigned a value
//functions
var lastName="abcd"; // it was declared outside the function so it will be globally accessed
function printMultiNames(){  
    console.log(lastName);
}
printMultiNames();

function names()
{
    var uname="Sara"; // I can't use it outside the function
    console.log(uname);
}
//console.log(uname); //error
names();

let body=[];
body.push("leg");
body.push("arm");
console.log(body);

const isActive=undefined; // I use it when variable is not defined yet 
console.log(isActive);
console.log(typeof isActive);
console.log(!isActive); //true or false , here it will return true because it is undefined (is it not?)

const isConnect=null;
console.log(isConnect);
console.log(typeof isConnect); // object because it returns from class
console.log(!isConnect); //true because it is null

const isEmpty='';
console.log(isEmpty);
console.log(typeof isEmpty); //string
console.log(!isEmpty); //true because it is empty string

const num=0;
console.log(num);
console.log(typeof num);
console.log(!num); //true because it is 0
*/

/*
//assigment operator =
// !==,===
const nameOne="Ramaa";
const nameTwo="Sara";

// comparsion operator 
// >,<,<=,<= ,...
console.log(nameOne>nameTwo); // it compare with the value of the letter not the numbers of letters on each

const a=10;
const b=20;
const c=30;
console.log(a===b); //false because a!=b , === identical in value/datatype
console.log(a!==b); //true because a!=b 

//logical operator
// && (and) || (or) ! (not)
console.log(a===b || a!==c );

// ... (spread operator)
// it is used to expand the array or object
const arr=[1,2,3];
const arrTwo=[...arr,4,5,6];
arr[0]=15;
console.log(arr);//[15,2,3]
console.log(arrTwo); // [1,2,3,4,5,6]

const myObject={
    sname:"Ramaa",
    age:25,
    sibling:["Sara","Yara","Noga","Jood","Saleh"],
};
const myObjectTwo={...myObject};
myObject.sname="Sara";
console.log(myObject); 
console.log(myObjectTwo);

// destructring
// it is used to unpack the array or object
//to access there element easily
const students=["Sara","Yara","Nawal"];
const [x,y,z]= students; //instead of using const x=students[0];,..etc 
console.log(x,y,z); // Sara Yara Nawal
const {sname,age}=myObject; //instead of using const name=myObject.name;
console.log(sname,age); // sara 25
*/

/*
//array methods, using these methods don't effect by the original
//push(),pop(),shift(),unshift(),splice(),slice(),indexOf(),lastIndexOf(),includes
//forEach(),map(),filter(),reduce(),some(),every(),find(),findIndex()
//sort(),reverse()
const mobiles=["Samsung","iphon","tecno","hwawi"];
console.log(mobiles); // ["Samsung","iphon","tecno","hwawi"]

// filter
const filterMobile=mobiles.filter((mobile,index)=>mobile === "Samsung"); // =>index===2 && mobile==="hwawi"
console.log(filterMobile); // ["Samsung"]
const cheapPhones=mobiles.filter((item)=>item === "tecno");
console.log(cheapPhones); // ["tecno"]
const smallNamePhones =mobiles.filter ((item)=>item.length<6);
console.log(smallNamePhones); // ['iphon', 'tecno', 'hwawi']

//find , it is different than filter that it returns the element not an array
const findMobile=mobiles.find((mobile)=>mobile === "Samsung");
console.log(findMobile); // Samsung
const findMobiles=mobiles.find((mobile)=>mobile === "phone");
console.log(findMobiles); // undefined
const findMobileIndex=mobiles.findIndex((mobile)=>mobile === "Samsung");
console.log(findMobileIndex); // 0

//map , it means we want to recreate in a new way 
const mapMobile=mobiles.map((mobile)=>mobile.toUpperCase());
console.log(mapMobile); // ["SAMSUNG","IPHON","TECNO","HWAWI"]
const mapMobiles=mobiles.map((mobile)=>mobile+" mobile");
console.log(mapMobiles); // ["Samsung mobile","iphon mobile","tecno mobile","hwawi mobile"]
const newMobileArray=mobiles.map((phones)=> {return{mname:phones,price:null}});
console.log(newMobileArray); // [{mname: "Samsung", price: null},{mname: "iphon", price: null},{mname: "tecno", price: null},{ mname: "hwawi", price: null}]

// concat (combine)
// const combine=mobiles.concat (["abc","tre"]);
// console.log(combine); // ["Samsung","iphon","tecno","hwawi","abc","tre"]

//push() it is used to add the element at the end of the asrray
mobiles.push("xiaomi");
console.log(mobiles); // ["Samsung","iphon","tecno","hwawi","xiaomi"]

//pop() it is used to remove the last element of the array
mobiles.pop();
console.log(mobiles); // ["Samsung","iphon","tecno","hwawi"]

//shift() it is used to remove the first element of the array
mobiles.shift();
console.log(mobiles); // ["iphon","tecno","hwawi"]

//unshift() it is used to add the element at the beginning of the array
mobiles.unshift("samsung");
console.log(mobiles); // ["samsung","iphon","tecno","hwawi"]

//splice() it is used to add or remove the element from the array
mobiles.splice(1,0,"tecno");
console.log(mobiles); // ["samsung","tecno","iphon","tecno","hwawi"]

//slice() it is used to get the part of the array
mobiles.slice(1,3);
console.log(mobiles); // ["tecno","iphon","tecno"]

//indexOf() it is used to get the index of the element in the array
mobiles.indexOf("tecno");

//lastIndexOf() it is used to get the last index of the element in the array
mobiles.lastIndexOf("tecno");

//includes() it is used to check if the element is present in the array or not
mobiles.includes("tecno");
*/

/*
//parsing بيكون بصيغة تحليليلة
const colors=["red","white","blue"];
console.log(colors);
//stringfy بيكون بصيغة text
const colorText=JSON.stringify(colors);
console.log(colorText); // ["red","white","blue"]
const parsingText=JSON.parse(colorText); // رح يتحول من text ل تحليلي
console.log(parsingText); // ["red","white","blue"] 
*/

//-------------------------------------------------------------------------------------
/*
const userName ="Rama";
const userTwo="Mahmoud";
const userThree="Rama";
const age=23;
//if statement
if (userName === userTwo){
    console.log("same");
}
else if (userName===userThree) {
    console.log("same");
    
} 
else{
    console.log("not same");
}

if(typeof age==="number"){
     console.log("age is number");
}

//ECS6
//ternary operator
userName===userTwo? console.log("yes"):console.log("no");
userName===age?console.log("yes"):typeof age==="number"?console.log ("age is number") : console.log("no");

// switch statement
switch (age) { //{scope}
    case 3:
        console.log("yes");
        break;
    case 4:
        console.log("yes");
        break;
    default:
        console.log("no");
        break;
}

// for loop
const numbers=[0,9,4,5,6];
for (let i = 0; i < numbers.length; i++) { // i:index,length:number of elements => index+1
    console.log(i);
    console.log(numbers[i]);
}

// foreach loop
const names=["Rama","Zaina","Tasneem"];
names.forEach((item,index)=>console.log(item)); 
names.forEach((item,index)=>{
    if(item=="Rama"){
        names[index]="Tala";
        //console.log(index);
    }
    // else{
    //     console.log("not found");
    // }
});
console.log(names);

//block code , code runs line by line (or when the block of code finish first {})
const myObject={
    uname:"Rama",
    lastName:"Alhadeed",
    country:"Amman"
    
};
//const {uname,lastName,address}=myObject; //same as in the object
// console.log(uname,lastName,address);

// for..in
for (const element in myObject) {
    console.log(myObject[element]); //to print the values of the elements(keys)
}

const objKeys=Object.keys(myObject);
console.log(objKeys); //to print the keys of the object ,['uname', 'lastName', 'country']
const objvalues=Object.values(myObject);
console.log(objvalues); //to print the values of the object ,['Rama', 'Alhadeed', 'Amman']
*/

/*
//Functions
// function name(parameters){code to be executed}
function printMyName(){
    console.log("My name is Rama");
}
printMyName(); //calling the function

// void functions(means that it execute what inside the {} only , doesn't return)
// function with parameters
function printMyName(firstName,lastName,age){
    console.log(firstName+" "+lastName+" and my age is: "+age);
}
printMyName("Rama","Alhadeed",23); //calling the function with parameters

// function with return type
function add(a,b){
    return a+b;
}
console.log(add(5,6)); //calling the function with parameters and print the result

// function with default parameters
function greet(name="Rama"){
    console.log("Hello "+name);
}
greet("Alhadeed");
//greet(); //calling the function without parameters

// function with arrays
const cars =["car1","car2","car3","car4"];
function printNewArray(){
    let newArray=[];
    cars.forEach((item,index)=>{
        // if(item==="car4"){
        //     cars[index]="car5";
        // }
       if(item!=="car4"){
        newArray.push(item);
       }
       else{
        newArray.push("car5");
       }
    });
    //return cars;
    return newArray;
}
console.log(printNewArray()); //calling the function and print the result

//functions in ECS6
// arrow function
const printYourName=()=>{
    console.log(" Rama");
   // return "Rama";
};
printYourName(); //calling the function
//console.log (printYourName);

// simplest arrow functions
//const printYourName=()=> "Rama";
//console.log(printYourName());

// arrow functions wuth return values
// const printYourName=(firstName,lastName)=>{
//     return firstName+" "+lastName;
// };
// console.log(printYourName("Rama","Alhadeed")); //calling the function with parameters
*/

console.log("this branch added on develop");























