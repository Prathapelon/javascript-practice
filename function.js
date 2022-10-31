// function add(a,b){
//     return a+b
// }

// let result=add(9,2);
// //console.log(result);


// let add=function(a,b){
//     return a+b
// } 

//result=add(a,b)
//console.log(result);

//es6 version
// we will not use function keyword listzed of that we use =>symbol

let sum=(a,b)=>{
    
}


//1) pop (): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let students =["karthik","dinga","dingi","manga","mangi"]
let rem =students.pop();//modifing :deleting the last elements in array
console.log(students);
//let rem =students.pop
console.log("removed element is :"+rem);// to know the removed elements

//push():Appends new elements to the end of an array, and returns the new length of the array.
students.push("rockey bai","prathap")     

students.push("vikram");//we can use two or more times it will add the elements to the last memory blocks
console.log(students);
console.log(length);//new length 

//shift ();Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let rema=students.shift();//removes the first elements in array
console.log(students);
console.log(rema);

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.0
let remo=students.unshift("kale");
console.log(students);
console.log(remo);

 //console.log(l);


 //students.splice (index , numbers of elements to delete,new elemensts,add new elemests )
 //spilce():using the splice ()we can delete the elements from the specified index positon 
 console.log(students);
 students.splice(1,1);
 console.log(students);

 //! using the splice ()we cdan add the elements in place of deleted elments
 //!using the splice () we ca add the elements without deleting the any elements 
 students.splice(4,0,45,47)
 console.log(students);


//deleting elements
//let remeo =numbers.splice(1,2);

        //       -4          -3          -2         --1
let actors=["salman","sudeep","sharok","vikram"]
let actor =actors.splice(-3,2);
console.log(actor);
console.log(actors);

//slice();The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

console.log("*****slice()******");
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let employees=["A","B","C","D","E"]

console.log(employees);
let employees2=employees.slice(1,3);//it does not affect the original array 
console.log(employees2);//lilke extracting the want we want 
console.log(employees);
// slice(start index ,end index)
//to stop sliceing at any posssition we need to spocefing end index (it is optional )

let employees3=employees.slice(-1,4)
console.log(employees3);

let employees4=employees.slice(1,-3)
console.log(employees4);

//reverse ():Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(employees.reverse());

//sort():decending or assending order the array
//sort method sort the array in assending order in the value it use the ASCII value;
let nums=[1,100,1000,2,50,54]
console.log(nums.sort);
console.log('1'.charCodeAt());
console.log('a'.charCodeAt());
console.log('A'.charCodeAt());

//let ascNums=nums.sort(function(a,b){ return a-b;})//ascending the order 
//console.log(ascNums);
ascNums=nums.sort(function(a,b){ return b-a;})//descending the order 
console.log(ascNums);
//it accepts a compare function as argumensts in order to sort the elemenst in proper ascending or desending order 

let str ="jspider";
console.log(str);

str="A"
console.log(str);
 str='10'
 console.log(str);
 let tech =new String("java Script")
 //new key word is used to vresate obkj in js
 console.log(tech);
 console.log(typeof tech);//obj

 let firstname= "salman"
 let fullname=`${firstname}  arsal ${tech} marvalas`;
 console.log(fullname);

 //string interolation :the process of using the JS expression inside a string 
 // to perform string interpolation in JS we use `${}`
 //all the chaaracter of a string will be having unique identity called index value .
 //`${}`

 //programme to find reverese the given String 
//  let ice ='cream';
 
//  console.log(ice.length);//5
// let stre=" "
//  for (let i=ice.length;i>=0;i--){
// stre=stre+ice[i]
//  }
//  console.log(stre);
//  let icee='cream'

console.log("***rev cream**");
//write a programme to find the given String is palindrome or not
let ice ='cream';
let revstr=""
  for (let i=ice.length-1;i>=0;i--){
 revstr=revstr+ice[i]
  }
  console.log(revstr);
  if(ice === revstr){
    console.log("palindrome");
  }else{
    console.log("not a palindrome ");
  }


  console.log("****rev malayalam***");
  let icee ="malayalam";
let revst="";
  for (let i=icee.length-1;i>=0;i--){
 revst=revst+icee[i]
  }
  console.log(revst);
  if(icee === revst){
    console.log("palindrome");
  }else{
    console.log("not a palindrome ");
  }

  //String is immutablkity of strings
  let bling ="blingbling ";//String are not modifiable
  console.log(bling);
  let res =bling.toUpperCase();
  console.log(res);
  if (bling ===res){
    console.log("mutable");
  }else{
    console.log("imutable");
  }
  //methods in String 
// charAt()
// charCodeAt()
// concat()
// splite()
// slice()
// toUpperCase()
// toLowerCase()
// indexof()
// replace()
// replace()
let js="javascript"
//charAt():Returns the(ASCCI) Unicode value of the character at the specified location.
console.log(js.charAt(0));
console.log(js.charAt(5));
console.log(js.codePointAt(7));
console.log(js.charAt(7));

console.log(js.charCodeAt());

//concat():Returns a string that contains the concatenation of two or more strings.
console.log(ice.concat(js,"srs"));

//split();
let stre="splite"
console.log(typeof stre);

let s =stre.split("")
console.log(typeof s);

let revs =s.reverse();
console.log(revs);

let a =revs.join("")
console.log(a);
let revsstr=str.split("").reverse().join("");
if(str ===revsstr){
  console.log("pal");
}else{
console.log("not pal")
}

//slice():it return a section of a string of a string ,by using the speificd index position 
//Returns a section of a string.
let hi ="how are you ;"
let hii =hi.slice(4,7)
console.log(hii);

//toLower Case();
let cat="MEOW MEOW"
console.log(cat.toLowerCase());
//to uppercase():Converts all the alphabetic characters in a string to uppercase.
let cats="meow meow"
console.log(cats.toUpperCase());
//repeate():;


class Parent{
  constructor(skincolor,haircolor,bloodgroup,eyecolor,manner)
  {this.skincolor=skincolor;
  this.haircolor=haircolor;
  this.bloodgroup=bloodgroup;
  this.eyecolor=eyecolor;
  this.manner=manner;}
}
let c =new Parent("white","black","a+","blue","marvalas")
console.log(c);

class Child extends Parent{
  constructor(skincolor,haircolor,bloodgroup,eyecolor,manner,hairstyle,height,weight)
  {
    super(skincolor,haircolor,bloodgroup,eyecolor,manner,)
    this.hairstyle=hairstyle;
    this.height=height;
    this.weight=weight;
  }
}
let b =new Child("black","spike","b+","blue",  "french","5.7","65");
console.log(b);

// class: classes are the templets or blue prints for creating JS objects
//


////******DOCUMENT OBJECT MODEL********** */
///***WINDOW OBJET (GLOBAL OBJ(variables,obj,no, functions)) */:DOCUMENT:html file present object called windows
// 

//document.getElementsByClassName()
let d =document.getElementsByClassName("hi");
console.log(d);


//generating otp on web page
function generateotp(){
  let randomNumber =Math.random()*10000
  let otpdisplay=documents.getElementsById("otpdisplay")
  let otp=Math.trunc(randomNumber)
  if (otp>999){
    otpdisplay.InnerText=otp;
  }else{
    generateotp()
  }

}
//html code: 
//<h1>OTP: <span id="otpdisplay"></span></h1>
 //<button onclick="generateOtp()">OTP</button> <span>This is valid only for 30 minuts</span>

//Jvascript code :
function generateOtp(){
    let randomNumber = Math.random()*10000
    let otpdisplay = document.getElementById("otpdisplay")

    let otp = Math.trunc(randomNumber)
    
    if(otp > 999){
        otpdisplay.innerText = otp;
    }
    else{
        // alert("sorry click once more on the otp button")
        generateOtp()
    }
}
