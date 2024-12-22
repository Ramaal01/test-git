/*
//lexical scoping

//block scoping
const isActive=true; //global varoable

if( isActive){
    const userName="Rama";
    const age=23;
    console.log(userName);
    console.log(age);
}
console.log(userName); //ReferenceError: userName is not defined

//closure scoping
// function before but if I declared the function in the old way it will works any way - hoisting in js
const returnCorrectData=(uname)=>{ //local variable
    const users={
        userName:"Rama Alhadeed",
        age:23
    };
    
    if(uname=== "Rama"){
        return users;
    }else{
        return uname;
    }
};
if(isActive){
    const userName="Rama"; //nested variable
    console.log(returnCorrectData(userName));
}
*/

//promise functions
// resolve/reject(exceptio error- throw error)
/*
try {
    console.log("Hello");
    throw new Error("something wrong in line 37"); //throw error
    console.log("World");

}
catch (error) {
    console.log("line 13");
    console.log(error);
}
*/

/*
console.log("line1");
setTimeout(()=>{
    console.log("Hello!");
},3000); //3000 is 3 sec
console.log("line2"); //line1 line2  Hello!
*/

// async makes a function return a Promise / await makes a function wait for a Promise
/*
const printName=async (firstName,lastName)=>{
    console.log(firstName+" "+ lastName );
}
const printFullName=async()=>{
    await printName("Rama","Alhadeed");
    console.log("line 64");
};
printFullName(); //Rama Alhadeed
console.log("line 65");
// Rama Alhadeed - line 65-line 64
*/

/*
const printName=async (firstName,lastName)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (console.log(firstName+" "+ lastName ));
            // reject("error");
            }, 3000);
            });
}
const printFullName=async()=>{
    await printName("Rama","Alhadeed");
    console.log("line 64");
};
printFullName(); //Rama Alhadeed
console.log("line 65");
// line 65 - Rama Alhadeed - line 64
*/

//fetch
//fetch('https://jsonplaceholder.typicode.com/posts')
const fetchData=async()=>{
    const data= await fetch("https://jsonplaceholder.typicode.com/posts");
};
fetchData().then((data)=>console.log(data));
console.log("hi");