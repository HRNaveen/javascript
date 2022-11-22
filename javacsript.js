console.log("Hello");
var value =42;
var val2;

val2="java script";
console.log(val2);
var a=123;
console.log(a+"4");



var x=10;
var y=20;
var z="10";
if(x==y){
    console.log("values are equal");
}
if(x==z){
    console.log("values are equal");
}
if(x===z){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
var myobj={};
console.log(myobj);
myobj.prop="hii";
myobj.prop1=123;
console.log(myobj);

var myobj1={
    "a":10,
    "b":"java",
    "c":true
};
console.log(myobj1);
console.log(myobj.prop);

/*accessing using square bracket notation*/
console.log(myobj1["a"]);

/* when to use[] notation*/


var obj={
    "p":"String",
    "1":"one"
};
console.log(obj["1"]);
console.log(obj["PropertyName"]);

/*nested objects*/

var obj1=obj;
console.log(obj1==myobj);

var obj2={
    "a":10,
    "b":"null",
    "objprop":{
        "Innerprop":"inner property"
    }
};
console.log(obj2);
obj2.objprop.newInner="newInnerValue";
console.log(obj2);
console.log(obj2.objprop.newInner);
console.log(obj2.objprop["newInner"]);
//console.log(obj2["objprop.newInner"]);

//=== for objects

var obje={
    "prop":"hello"
};
var obje1=obje;
if(obje1===obje1)
{
    console.log("variables are equal");

}


//Deleting properties with delete operator
var Person={
    "firstname":"koushik",
    "middlename":"null",
    "lastname":"kothagal",
    "age":25
};
Person.age=undefined;
console.log(Person.age);
console.log(Person);
delete Person.age;
console.log(Person.age);
console.log(Person);

//creating an array

var arr=[10,20,30];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr);

arr[3]="hello";
console.log(arr[3]);
console.log(arr);
console.log(arr.length);
arr[400]="null";
console.log(arr);
console.log(arr.length);


//wrapper objecgts
var s="Hello World";
console.log(s.length);
var s1="this is java script";
console.log(s1.length);

//adding function
function sayHello(){
    console.log("Hello");
}
sayHello();
function sayHello1(name,age,address){
    console.log("Hello "+name+" age = "+age+" address="+address);
}
sayHello1("abc",45,"Banglore");
sayHello1("abc");
sayHello1("abc",24,"banglore","mumbai");

//how to return a value
function sayHello2(name,timeOfday){
    return "Hello "+name+" Time Of day "+timeOfday;
   // return;
}
var returnValue=sayHello2("koushik","Afternoon");
console.log(returnValue);

var f=function foo(){
    console.log("Hello");
};
f();

var f1=function()
{
    console.log("Java Script");
};
f1();

//f1=1;
//f1();
 


//function as argument
var func=function(name){
    console.log("Hello "+name);
}
var executor=function(f,name){
    console.log(f);
    func(name);
}
executor(func,"koushik");

//function on objects

var object1={
    "testprop":true
}
object1.myMethod=function(){
    console.log("Hello JavaScript");
};
object1.myMethod();
console.log(object1);

var Person1={
    "firstName":"Koushik",
    "lastName":"Kothagal",
    "getFullName":function(){
       // return Person1.firstName+" "+Person1.lastName;
       return this.firstName+" "+this.lastName;
    }
};
var fullName=Person1.getFullName();
console.log(fullName);

var Person2=Person1;
Person1= {};
console.log(Person2.getFullName());   //use this keyword insted of using Person1 in return statement



//code exercise

var Person={
    "Address":{
        "Street":"#123,Js road",
        "Area":"Js",
        "city":"Banglore",
        "State":"Karnataka",
        "isFromState":function(s){
           /* if(s===this.State){
                return true;
            }
            else{
                return false;*/
            return (this.State===s);

            }
        }
    }

var result=Person.Address.isFromState("Karnataka");
console.log(result);


//default function arguments
var add=function(a,b){
console.log(arguments);
return a+b;
}
console.log(add(10,30,2,4,34,45,3));


var add1=function(){
    console.log(arguments);
    var i,sum=0;
    for(i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
    }
    console.log(add1(10,30,2,4,34,45,3));


    //arrays

    var myArray=[10,20,"Hello",{}];
    console.log(myArray);
    myArray.push(17);
    console.log(myArray);
    myArray.pop();
    console.log(myArray);
    myArray.shift();
    console.log(myArray);
    myArray.unshift(47);
    console.log(myArray);

    //forEach loop
    var arr3=[10,20,"Hello",{}];
    var myFunction=function(item){
        console.log("for an element "+item);
    };
    arr3.forEach(myFunction);



