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