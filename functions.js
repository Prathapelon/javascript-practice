// function without para and return statement//
function greet(){
    console.log("hi iam mad function");
} 
greet();

//funcrtion with para and return statement//
function ticktick(time){
    return `Now time is ${time}`
}
let res =ticktick("12pm")
alert(res)

//function with para but without return statement//
function hiHello(a){
    console.log(a);
}
hiHello("hi Hello");

// function without para but with return statement//
function rain(){
    return 'its raining now '
}console.log(rain()) 

var num1=10;
let num2=10;
if (num1===num2){
    var num1=20;
    console.log(num1);//20
}
console.log(num1);//(variables accessed from the if block)
console.log("*************");


let x=10;
function call(){
    var x=20;
    console.log(x);//20
}
call ();
console.log(x);//10;(from function block variable con't ve access outside)


let number=[10,20,30,45,56];
console.log(number);
console.log(typeof number);

//accessing array elements using index values
//indec value :identify a array elements uniquely 
//index values starts from 0

console.log(numbers[0]);
console.log(numbers[3]);

//length of the array;
console.log(numbers.length);

//last elements index value :
console.log(numbers.length-1);

//  accessing all the elements at one shot 
// for loop ;
// for (let i=0;i<number.length;i++){
//     console.log(number[i]);
// }

console.log("*****************");
//for of loop;
for (let number of numbers){
    console.log(number);
}

//array is used to store the hetiriogenious elements in memory block
//let fruits=["Apple","banana","mango","Graps"]
 
//JS array i heteriogenious and homogenious 
//it will not have any elements
console.log(fruits);
//accesing the araray elelments using index value 
console.log("in my store "+fruits[0]+"is available ");

//length:
console.log("  finding the lenght of the array  ");
console.log(fruits.length);//3


//accessing all elements at one shot to perform common operation for all the elements 
for(let i=0;i<fruits.length;i++){
    console.log("in m store "+fruits[i]+"is available");
}

console.log("**modifing the array****");
//madification on the array//
let cars =["maruthi800","nano","Ambassedor car"];

console.log(cars[0]="maruthi 900");
console.log(cars);

//delete the array elements:;
console.log("***dealete  the array****");
delete cars[1]
console.log(cars);

//if u delete the any elements.empty holes eill be created  in the arary 
//add elements :
console.log("     updating the array       ");
cars[3]="baleno"
console.log(cars);

console.log("***re update the deleted or empty  memory array****");
 cars[1]="tata indica"
 console.log(cars);

//we con't delete the empty holes in araay memory block but we can update that empty memory block ;using using asigning




////METHODS OF JS ARRAY ****//
//1)  pop() method 
//2)  push ()
//3)  shift ()
//4)   unshift()
//5)    splice ()
//6)    sort(()
//7)   slice ()
//8)    reverse ()
//9)    indexof ()
//10)   join ()
//11)    map()
//12)    filter ()
//13)    forEach()

//1) pop (): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let students1 =["karthik","dinga","dingi","manga","mangi"]
let reme =students1.pop();//modifing :deleting the last elements in array
console.log(students);
//let rem =students1.pop
console.log("removed element is :"+reme);// to know the removed elements

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
let remeo =numbers.splice(1,2);

        //       -4          -3          -2         --1
let actors1=["salman","sudeep","sharok","vikram"]
let actor1 =actors.splice(-3,2);
console.log(actor1);
console.log(actors1);

//slice();The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

console.log("*****slice()******");
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let employes=["A","B","C","D","E"]

console.log(employes);
let employes2=employees.slice(1,3);//it does not affect the original array 
console.log(employes2);//lilke extracting the want we want 
console.log(employes);
// slice(start index ,end index)
//to stop sliceing at any posssition we need to spocefing end index (it is optional )

let employes3=employees.slice(-1,4)
console.log(employes3);

let employees4=employees.slice(1,-3)
console.log(employees4);

//reverse ():Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(employees.reverse());

//sort():decending or assending order the array
//sort method sort the array in assending order in the value it use the ASCII value;
let num=[1,100,1000,2,50,54]
console.log(num.sort);
console.log('1'.charCodeAt());
console.log('a'.charCodeAt());
console.log('A'.charCodeAt());

//let ascNums=nums.sort(function(a,b){ return a-b;})//ascending the order 
console.log(ascNums);
ascNums=nums.sort(function(a,b){ return b-a;})//descending the order 
console.log(ascNums);
//it accepts a compare function as argumensts in order to sort the elemenst in proper ascending or desending order 


// ondexOf():Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(actors.indexOf("sudeep"));
console.log(actors);
console.log(actors.indexOf( 'index of actors is' + "salman"));
console.log(actors.indexOf("vikram"));

let fruitss=["apple","mango","pineapple"]
console.log(fruitss.indexOf("apple",0));

let mobiless=["vivo","oppo","mi","samsung","oppo"]

console.log(mobiless.indexOf("oppo",2));
console.log(mobiless.indexOf("mi"));

//joins():it is used to convert object to string.
console.log(mobiles.join());console.log(typeof mobiles);//object

let s=mobiles.join("/")
console.log(typeof s);//string
console.log(s);

//map():it is used to access all the elements from the array and also it eturns the array of modified elements
// it access the function as argumrnt.

let Nums =[1,2,3,4];
console.log(Nums);
console.log(Nums[0]+5);

for(let i=0;i<Nums.length;i++)
{
    console.log(Nums[0]+5);
}

for(let number of Nums)
{
    console.log(number + 5);
}

nums.map(function(element,index,array)
{

    //  console.log(elements+5);

    return element+5
})


//foreach()

nums.forEach(function(element){
    console.log(element +"iam hacker" );
})


//filter():it is used to filter the array elements and also ift returns the array of filtered methods .
//it returns the element of an array that meet the condition.

// ////let age=[10,6,20,31,15];
// //let a =age.filer(Function(Element){
    
// })
// console.log(a);

// [3:04 PM, 8/8/2022] +91 73493 80800: // array is used to store multiple values into a single variable

// let fruit1 = "Apple";
// let fruit2 = "Mango";

// let fruits = ["Apple" , "Banana" , "Mango" , "Grapes"]

// // js array is heterogenous and also homogenous
// // it will not have any fixed length
// console.log(fruits);
// // accesing the array elem using index value
// console.log("in my store " + fruits[0] +" is available");

// //length:
// console.log(fruits.length); //3

// // accessing all elements at one shot to perform common operation for all the elements
// for(let i=0 ; i<fruits.length ; i++){
//   console.log("in my store " + fruits[i] +" is available");  
// }

// // modification on the array
// let cars = ["maruti 800" , "nano" , "Ambassedor car"];
// console.log(cars);

// // update the element
// cars[0] = "maruti 900";
// console.log(cars);

// // delete element
// delete cars[1]
// console.log(cars);

// // if u delete any elemet ,  empty holes will be created in the array

// //add elemnts:
// cars[3] = "Baleno"
// console.log(cars);

// methods of array
// pop()
// push()
// shift()
// unshift()
// splice()
// slice()
// sort()
// reverse()
// indexof()
// join()
// map()
// filter()
// forEach()

// // pop(): Removes the last element from an array and returns it
// let students = ["kartick" , "dinga" , "mingi" , "dingi"];
// console.log(students);
// let rem = students.pop(); //modifying
// console.log(students);
// console.log(rem); // removed elent

// // push() : Appends new elements to the end of an array, and returns the new length of the array
// let l = students.push("salman" , "aamir")
// console.log(students);
// console.log(l); // new length

// // shift():Removes the first element from an array and returns it
// rem = students.shift();
// console.log(students);
// console.log(rem);

// //unshift(): Inserts new elements at the start of an array, and returns the new length of the array.
// l = students.unshift("ballaya")
// console.log(students);
// console.log(l); // new length
// [5:13 PM, 8/8/2022] +91 73493 80800: indexof(): It Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// // it accepts 2 args => 1st(element) and 2nd(index position) 
// let mobiles = ["vivo" , "oppo" , "mi" , "samsung" , "oppo"]

// console.log(mobiles.indexOf("oppo" , 2));
// console.log(mobiles.indexOf("mi"));

// // join(): join() converts array to string and it sperates the array elements using a separator
// console.log(typeof mobiles); // object
// let s = mobiles.join("/");
// console.log(typeof s); // string
// console.log(s);

// // map():
// let nums = [1 , 3, 2 , 4 , 100 , 6];
// console.log(nums);
// console.log(nums[0]+5 , nums[1]+5 , nums[2]+5);

// for(let i=0 ; i<nums.length ; i++){
//   console.log(nums[i] + 5);
// }

// for(let number of nums){
//   console.log(number + 5);
// }



// let modnums = nums.map(function(element , index , array){
//   // console.log(element + 5);
//   // console.log(index);
//   // console.log(array);

//   return element + 5
// })

// console.log(modnums);
// // map method is used to access all the elments from the array and also it returns an array of modified elements
// // it accepts a function as the argument 


// // forEach(): It Performs the specified action for each element in an array
// // it accepts a function as the argument 
// nums.forEach(function(element){
//   console.log(element + " iam mad");
// })


// // filter() : It Returns the elements of an array that meet the condition specified
// // filter() IS USED TO FILTER THE ARRAY Elements and also it returns the array of filtered elements
// let age = [10 , 6 , 20 , 31 , 15];

// let a = age.filter(function(element){
//   return element < 15
// })
// console.log(a);

// // spilce():
// //! Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
// // ! using splice() we can delete the elements from the specified index position 
// //! using splice() we can add the elemnts in place of deleted elments
// //! using splice() we can just insert the elemnts without deletening any element
// let numbers = [10 , 20 , 30 , 40 , 50];
// console.log(numbers);

// //?syntax:
// // array.splice(index , No of elments to delete  , new element , new elements ...)

// // deleteing elements
// let rem = numbers.splice(1 , 2);
// console.log(numbers);
// console.log(rem); // deleted elments as an array
// //? splice() returns An array containing the elements that were deleted.

// // updating elements
// numbers.splice(2 , 1 , 35);
// console.log(numbers);

// // inserting elements
// numbers.splice(4 , 0 , 46 , 47)
// console.log(numbers);

// //! Note : array will have both positive and negative index positions, positive index positions starts from 0 and negative index positions -1
//             //     0         1          2          3
// let actors = ["salman" , "sudeep" , "sharuk" , "vikram"]
//             //   -4         -3          -2          -1

// let actor = actors.splice(-3 , 2);
// console.log(actor);


// //slice(): it will not affect the original array , it will simply take some array elements form the specified start index and returns a new array
// // to stop slicing at any position we need to specify end index(it is optional)
// // end index will be excluded in the output

// let employees = ["smith" , "john" , "cena" , "aaaa"];
// console.log(employees);

// //?slice(start index , end index)

// let employees2 =  employees.slice(1 , 3);
// console.log(employees2);

// let employees3 = employees.slice(1 , -2);
// console.log(employees3);

// // reverse(): Reverses the elements in an array
// console.log(employees.reverse());

// // sort():
// // sort() sorts the array in ascending order of the ascci values
// // it accepts a compare function as argument in order to sort the elements in proper asscending order and descending order
// let nums = [1 , 1000 , 100 , 2 , 50];
// console.log(nums.sort());

// console.log("1".charCodeAt()); //49

// console.log("2".charCodeAt()); //50

// let ascNums = nums.sort(function (a , b){
//    // return a - b; // ascending order
//    return b-a // descending order
// });
// console.log(ascNums);

// // indexof():Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// let fruits = ["A" , "B"]
// console.log(fruits.indexOf("A" , 1));

