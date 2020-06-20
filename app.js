// chapter 21-25, task 1
// var a=prompt("Enter your first name")
// var b= prompt("Enter your last name")
// var c = a + " " + b;
// alert("Have a good day " + c);

// chapter 21-25, task 2
// var a= prompt("Enter your favourite mobile model");
// var n= a.length;
// document.write("My favourite phone is: " + a + "<br>");
// document.write("Length of string: " + n);

// chapter 21-25, task 3
// var a= "Pakistani";
// document.write("String: " + a + "<br>");
// document.write("Index of 'n': " + a.indexOf("n"));

// chapter 21-25, task 4
// var a="Hello World!";
// document.write("String: " + a + "<br>");
// document.write("Last index of 'l': " + a.lastIndexOf("l"));

// chapter 21-25, task 5
// var a= "Pakistani";
// document.write("String: " + a + "<br>");
// document.write("Character at index 3: " + a.charAt(3));

// chapter 21-25, task 6
// var a=prompt("Enter your first name")
// var b= prompt("Enter your last name")
// var c= a.concat(" " + b);
// alert("Have a good day " + c);

// chapter 21-25, task 7
// var a="Hyderabad";
// var b= a.replace("Hyder","Islam");
// document.write("City: " + a + "<br>");
// document.write("After replacement: " + b)

// chapter 21-25, task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br>");
// document.write("After replacement: " + message1)

// chapter 21-25, task 9
// var a="472";
// var b= Number(a);
// document.write("Value: " + a + "<br>");
// document.write("Type: String" + "<br>");
// document.write("Value: " + b + "<br>");
// document.write("Type: number" + "<br>");

// chapter 21-25, task 10
// var a= "peanuts";
// document.write("User input: " + a + "<br>");
// document.write("Uppercase: " + a.toUpperCase());

// chapter 21-25, task 11
// var a="javascript";
// var b= a.charAt(0).toUpperCase()+a.slice(1);
// document.write("User input: " + a + "<br>");
// document.write("User input: " + b + "<br>");

// chapter 21-25, task 12
// var a=35.36;
// var b = a.toString();
// var c= b.replace(".","");
// document.write("Number: " + a + "<br>");
// document.write("Result: " + c);

// chapter 21-25, task 13
// var name= prompt("Enter your name");
// if(name === String.fromCharCode(33) || String.fromCharCode(44) || String.fromCharCode(46) || String.fromCharCode(64)) {
//     alert("Please enter a valid user name");
// }

// chapter 21-25, task 14
// var a=prompt("Weclome to the bakery. What would you like to order sir/ma'am?");
// a = a.toUpperCase();
// var arr=["CAKE" , "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
// var indexNum = arr.indexOf(a);
// for (var i=0; i<arr.length; i++) {
//     if(arr[i] === a) {
//         alert(a + " is available at " + indexNum);
//         break;
//     }
//     else if (arr[i] != a) {
//         alert("We are sorry " + a + " is not available ar our bakery")
//     }
// }

// chapter 21-25, task 15
// var pas=prompt("Enter your password")
// // chapter 21-25, task 15(a)
// if(pas === "" + Number()) {
//     alert("Password: " + pas);
// }
// else {
//     alert("Your password is incorrect!");
// }

// chapter 21-25, task 16
// var a="Universiry of Karachi";
// var res= a.split("").join("<br>");
// document.write(res);

// chapter 21-25, task 17
// var a= "Pakistan";
// var i=a.charAt(a.length-1);
// document.write("User input: " + a + "<br>");
// document.write("Last character of input: " + i)

// chapter 21-25, task 18
// var a="the quick brown fox jumps over the lazy dog";
// document.write(a + "<br>");
// var b= (a.match(/the/g)).length;
// document.write("There are " + b + " Occurences of the word 'the'")

// chapter 26-30, task 1
// var a=prompt("Write a positive integer") , b , round=Math.round(a), floor=Math.floor(a), ceil=Math.ceil(a);
// if(b= a + Number.isInteger(a) && a>0) {
//     // chapter 26-30, task 1(a)
//     document.write("Number: " + a + "<br>");
//     // chapter 26-30, task 1(b)
// document.write("Round off value: " + round + "<br>");
//  // chapter 26-30, task 1(c)
//  document.write("Floor value: " + floor + "<br>");
//  // chapter 26-30, task 1(d)
// document.write("Ceil value: " + ceil + "<br>")
// }
// else if (a< 0) {
//     alert("This is not a positive integer");
// }

// chapter 26-30, task 2
// var a=prompt("Write a negative float number") , b , round=Math.round(a), floor=Math.floor(a), ceil=Math.ceil(a);
// if(b= a + Number.parseFloat(a) && a<0) {
//     // chapter 26-30, task 2(a)
//     document.write("Number: " + a + "<br>");
//     // chapter 26-30, task 2(b)
// document.write("Round off value: " + round + "<br>");
//  // chapter 26-30, task 2(c)
//  document.write("Floor value: " + floor + "<br>");
//  // chapter 26-30, task 2(d)
// document.write("Ceil value: " + ceil + "<br>")
// }
// else if (a> 0) {
//     alert("This is not a negative float");
// }

// chapter 26-30, task 3
// var a=prompt("Write a value to display absolute number") , b=Math.abs(a);
// document.write("The absolute value of " + a + " is " + b);

// chapter 26-30, task 4
// var a= Math.floor(6*Math.random())+1;
// document.write("random dice value: " + a + "<br>");

// chapter 26-30, task 5
// var a="Heads", b="Tails";
// var toss = (Math.random() *2)+1;
// var floor = Math.floor(toss)
// if(floor === 1) {
//     document.write(floor + "<br>" + "Random coin value: " + b);
// }
// else {
//    document.write(floor + "<br>" +  "Random coin value: " + a);
// }

// chapter 26-30, task 6
// var a= Math.floor(100*Math.random())+1;
// document.write("Random number between 1 and 100 is: " + a);

// chapter 26-30, task 7
// var a=prompt("Enter your weight in kilograms");
// var b=Number.parseFloat(a);
// document.write("The weight of user is " + b + " Kilograms")

// chapter 26-30, task 8 
// var a=Math.floor(10*Math.random())+1;
// var b=prompt("Enter a number between 1 and 10");
// if (b === a) {
//     alert("Congratulations! You won");
// }
// else {
//     alert("Try again!");
// }

// chapter 31-34, task 1
// var d=new Date();
// document.write(d);

// chapter 31-34, task 2
//  var d= new Date();
//  var m=["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
//  alert("Current month: " + m[d.getMonth()]);

// chapter 31-34, task 3
// var d= new Date();
//  var days=["Sun" , "Mon" , "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var n = days[d.getDay()];
//  alert("Today is " + n);

// chapter 31-34, task 4
// var d= new Date();
// var n= d.getDay();
// if ( n === 6 || n=== 7) {
//     alert("It's Fun day.")
// }
// else {
//     alert("It's working day.")
// }

// chapter 31-34, task 5
// var d= new Date();
// if (d < 15) {
// alert("First fifteen days of the month");
// }
// else {
//     alert("Last fifteen days of the month")
// }

// chapter 31-34, task 6
// var d=new Date();
// var millsSince = d.getTime();
// var min = millsSince/60000;
// document.write("Current date: " + d + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millsSince + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + min );

// chapter 31-34, task 7
// var d= new Date();
// var t = d.getHours()
// if (t > 12) {
//     alert("It's PM");
// }
// else {
//     alert ("It's AM");
// }

// chapter 31-34, task 8
// var d= new Date();
// var laterDate= d.setFullYear(2020, 11, 31);
// alert("Later Date: " + d);

// chapter 31-34, task 9
// var d=new Date();
// var preDate = new Date(2020, 4, 24);
// var time = d.getTime() - preDate.getTime(); 
// var res = time / (1000 * 3600 * 24); 
// var round= Math.round(res);
// alert(round);

// chapter 31-34, task 19
// var d=new Date();
// var a= new Date(2015, 11, 5);
// var res = Math.abs(d - a ) / 1000;
// var round = Math.round(res);
// alert ("On reference date " + a + ", " + round + " seconds had passed since beginning of 2015");

// chapter 31-34, task 11
// var d = new Date();
// // var hours= (d.getHours()-1);
// // var hours = d.setHours(d.getHours() - 1);
// var hours = new Date(d.getTime() - (1000*60*60));
// document.write("Current date: " + d + "<br>");
// // var e = d.setHours(--d);
// // var res = (d - e);
// document.write("1 hour ago it was: " + hours);

// chapter 31-34, task 12
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth();
// var day = d.getDate();
// var c = new Date(year - 100, month, day);
// alert("Current date: " + d + "\n" + "100 years back it was " + c)

// chapter 31-34, task 13
// var age= prompt("Enter your age");
// var year;

// chapter 35-38, task 1
// var d = new Date();
// function myFunction() {
// }
//     d.getDate();
//     document.write(d) ;

// chapter 35-38, task 2
// var a= prompt("Enter your first name ");
// var b= prompt("Enter your last name");
// function first (a,b) {
//     return a+ " " + b
// }
// alert("Hello " +  first(a, b))

// chapter 35-38, task 3
// var a= +prompt("Enter first number");
// var b= +prompt("Enter second number");
// function first (a,b) {
//     return a+b
// }
// alert(first(a,b))

// chapter 35-38, task 4
// var val1= +prompt("Enter first value");
// var ope= prompt("Enter operand");
// var val2= +prompt("Enter second value");
// var res;
// function calc (val1 , ope, val2, res) {
//     if(ope === "+") {
//      return res = val1 + val2
//     }
//     else if (ope === "-") {
//         return res =  val1 - val2
//     }
//     else if (ope === "*") {
//         return res =  val1 * val2
//     } 
//     else if (ope === "/") {
//         return res =  val1 / val2
//     }
//     else {
//         return "Incorrect operator!"
//     }
// }
// document.write(calc(val1, ope, val2, res))

// chapter 35-38, task 5
// var a=+prompt("Enter a number"), b;
// function myFunction(){
//     return(b= Math.pow(a,2))
// }
// alert(myFunction(b))

// chapter 35-38, task 6
// var n= prompt("Enter a number")
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(n) );

// chapter 35-38, task 7
// var num1= +prompt("Enter first number");
// var num2= +prompt("Enter second number")
// function printRange(num1, num2) {    
//     var text = "";
//         for (var i = num1; i <= num2; i++) {
//             text += i + ', ';
//         }
//     return text;
//     var result = text;
// }
// document.write( printRange(num1, num2)) ;

// chapter 35-38, task 8
// var base = +prompt("Enter base of a triangle");
// var perpendicular = +prompt("Enter perpendicular of a triangle");
// var h=0;
// function calculateHypotenuse(h) {
//     function calculateSquare(base, perpendicular) {
//     var a = Math.pow(base, 2);
//     var b = Math.pow(perpendicular, 2);
//      return a + b;
//     }
//        return (h= Math.sqrt(calculateSquare(base, perpendicular)));
//     }
//     alert(calculateHypotenuse(h));

// chapter 35-38, task 9
// var area;
// var width, height;
// function Area (width, height) {
//     var area=width * height;
//     return area;
// }
// var res=Area(14,2);
// document.write("Width: 14 " + "<br>");
// document.write("Height: 2 "+ "<br>");
// document.write("The area of rectangle is: " + res)

// chapter 35-38, task 10
// var word= prompt("Enter your word") , check= "";
// for(var i= word.length - 1; i>=0; i--) {
// check += word[i]
// }
// if(check === word) {
//     alert(word + " is palindrome word")
// }
// else {
//     alert(word + " is not a palindrome word")
// }

// chapter 35-38, task 11
// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   document.write("EXAMPLE STRING: the quick brown fox" + "<br>");
//   document.write("OUTPUT: " + titleCase("the quick brown fox"))

// chapter 35-38, task 12
// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var res = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(res.length < array1[x].length)
//     {
//     res = array1[x];
//     } 
//   }
//   return res;
// }
// document.write("EXAMPLE STRING: Web Development Tutorial" + "<br>")
// document.write("OUPUT: " + longestWord("Web Development Tutorial"));

// chapter 35-38, task 13
// string = 'JSResources.com';
// function myFunction(string, letter){
//     return string.split(letter).length - 1;
// }
// document.write("EXAMPLE STRING: " + string + "<br>");
// document.write("OUTPUT: " + (myFunction(string, 'o')));

// chapter 35-38, task 14
// function calcCircumference(){
//     var radius = +prompt("Enter radius of a circle");
//     document.write("The circumference of the circle is " + (2 * radius * Math.PI) +"<br>" );
// }
// calcCircumference();
// function calArea(){
//     var radius = +prompt("Enter radius of a circle");
//     document.write("The area of the circle is " + (radius * radius * Math.PI) );
// }
// calArea();

