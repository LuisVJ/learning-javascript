# Types, Values and Variables

___

## 3.2 Numbers

___

Number is used to represent integers and aproximate real numbers.  
JavaScript represents numbers using the 64-bit floating point format.  
When a number appears directly in a program is called number literal.

### **3.2.1 Integer literals**

```javascript
// Some integer literals:
0
3
10000
```

Javascript also recognizes hexadecimal values, and since ES6, binary or octal.

```javascript
// Hex
0xff        // => 255: (16*15)
0xBADCAFE   // => 19939070
// binary and octal
0b10101     // => 21
0o377       // => 255
```

### **Floating-point literals**

They use traditional syntax for real numbers.  
May also be represented using exponential notation:

```javascript
3.14
2345.6789
.3333333
6.02e23
1.473822E-32
```

* You can use underscores within numeric literals to break long literals into chunks

```javascript
let billion = 1_000_000_000;
let bytes = 0x89_AB_CD_EF;
// Also with the fractional part:
let fraction = 0.123_456_789;
```

### **3.2.3 Arithmetic in Javascript**

Arithmetic operators:

```none
    Addition ->         +
    Substraction ->     -
    Multiplication ->   *
    Division  ->        /
    Modulo  ->          %
    Exponentiation ->   **
```

For more complex operations we can use the Math object.  
Example:

```javascript
Math.pow(2,54)
Math.floor(1.7)
Math.PI
Math.sqrt(3)
...
```

Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero.  

* Instead we will get *Infinity* or *-Infinity* for overflow and division by 0;  
* 0 for underflow (or negative 0)
* NaN for 0/0

#### Some number properties

```javascript
Number.parseInt()
Number.isInteger(x)         // Is x an integer?
Number.isSafeInteger(x)     // Integer -(2**53) < x < 2**53
Number.EPSILON              // 2**-52: smallest difference between numbers
```

The NaN value does not compare equal to any other value, including itself, we must use *Number.isNaN(x)*

### **3.2.4 Binary Floating-Point and Rounding Errors**

Binary floating-point representations cannot exactly represent numbers as simple as 0.1.  

```javascript
let x = .3 - .2     
let y = .2 - .1
x === y             // => false: the two values are not the same!
x === .1            // => false: .3 - .2 is not equal to .1
y === .1            // => true: .2 - .1 is equal to .1
```

### **3.2.5 Arbitrary Precision Integers with BigInt**

New feature defined in ES2020. It was added minly to allow the representation of 64-bit integers, which are required for compatibility with many other programming languages and APIs.  
BigInt literals:

```javascript
1234n       //
0b111111n   // A binary BigInt
0o7777n     // An octal BigInt
0x8000000000000000n     // => 2**63n: A 64-bit integer
```

Arithmetic with BigInt values works like arithmetic with regular JavaScript numbers, except that division drops any remainder and rounds down(toward zero).  
None of the functions of the Math object accept BigInt operands, however.

### **3.2.6 Dates and Times**

JavaScript Dates are objects, but they also have a numeric representation as a *timestamp* that specifies the number of elapsed milliseconds since January 1, 1970:

```javascript
let timestamp = Date.now()  // The current time as a timestamp (a number)
let now = new Date();       // The current time as a Date object.
let ms = now.getTime();     // Convert to a millisecond timestamp.
let iso = now.toISOString() // Convert to a string in standard format.
```

We will see more about the Date class in following sections.
___

## 3.3 Text

___

The type for representing text is the string. A string  is an immutable ordered sequence of 16-bit values, each of which tipically represents a Unicode character.  

### **3.3.1 String literals**

To include a string, simply enclose the characters of the string within a matched pair of single or double quotes or backticks.

```javascript
""          // Empty string
'testing'
"3.14"
'name="myform"'
```

You can break a string literal across multiple lines by ending each line but the last with a backslash (\):

```javascript
"one\
long\
line"
```

### **3.3.2 Escape sequences in string literals**

The backslash character (\), combined with the character that follows it, represents a character that is not otherwise representable within the string. Some examples:

```javascript
\0      // The NUL character(\u0000)
\t      // Horizontal tab(\u0009)
\\      // Backlash(\u005C)
\xnn    // The Unicode specified by the two hexadecimal digits nn
\unnnn  // The Unicode specified by the four hexadecimal digits nnnn
\u{n}   // The Ujnicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)
```

### **3.3.3 Working with strings**

```javascript
// Concatenation
let msg = "Hello, " + "world"

// Strings can be compared with === and !=== operators, and also <, <=, > and >=.

msg.length      // => length property, the number of characters in the string

// other utilities

msg.substring(1,4)  // => "ell"
msg.slice(-3)       // => "rld": last 3 characters
msg.split(", ")     // => ["Hello", "world"]

msg.indexOf("l")    // => 2: position of the first letter l
msg.includes("or")  // => true: msg includes substring "or"
msg.replace("llo", "ya")    // => "Heya, world"
...

// And many other methods to work with strings
```

None of this methods alter the original string, instead they return new strings the we can save in another variable or use directly.

### **3.3.4 Template literals**

In ES6 and later, string literals can be delimited with backticks.  
Template literals can include arbitrary JavaScript expresions:

```javascript
let name = "Bill"
let greeting = `Hello ${ name }.`;  // greeting == "Hello Bill"

// a more complex template literal:
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;
```

* Tagged template literals  

```javascript
function example(strings, value, value2) {
    console.log(strings)
    console.log(value, value2)
    return    
}

let name = Luis
let age = 34

example`Hello, I'm ${name} and I am ${age} years old`;

// ["Hello, I'm ", " and I am ", " years old"]
// Luis 34
```

### **3.3.5 Pattern matching**

Text between a pair of slashes constitutes a regular expresion literal. the second slash can also be followed by one or more letters, which modify the meaning of the pattern. Examples:

```javascript
/^HTML/;        // Match the letters H T M L at the start of the string
/[1-9][0-9]*/;  // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i;  // Match "javascript" as a word, case-insensitive
```

___

## 3.4 Boolean Values

___

There are only two possible values of this type, true and false.  
Any JavaScript value can be converted to a boolean. The following values convert to *false*:

* undefined
* null
* 0 and -0
* NaN
* ""

All other values, including objects (and arrays) convert to, and work like, *true*.

___

## 3.5 null and undefined

___

null is usually used to indicate the absence of a value.  
undefined is the value of variables that have not been initialized and the value you get when you query the value of an object property or array element that does not exist. Is also the return value of functions that do not explicitly return a value, and the value of function parameters for which no argument passed.

___

## 3.6 Symbols

___

Symbols were introduced in ES6 to serve as non-string property names.  
The *Symbol()* function takes an optional string argument and returns a unique Symbol value. If you supply a string argument, that string will be included in the output of the Symbol's toString() method.  

The Symbol.for() function always returns the same value when called with the same string.

___

## 3.7 The Global Object

___

When the JavaScript interpreter starts (or whenever a web browser loads a new page), it creates a new global object and gives it an initial set of properties that define:

* Global constants like *undefined*, *Infinity* and *NaN*
* Global functions like *isNaN()*, *parseInt()* and *eval()*
* Constructor functions like *Date()*, *RegExp()*, *String()*, *Object()* and *Array()*
* Global objects like Math and JSON

ES2020 defines *globalThis* as the standard way to refer to the global object in any context.

___

## 3.8 Immutable Primitive Values and Mutable Object References

___

Primitives are immutable, and they are compared by value.  
Objects are mutable, their values can change. Objects are not compared by value; two distinct objects are not equal even if they have the same properties and values. Objects are compared by reference, two objects values are the same if and only if they refer to the same underlying object.

If you want to make a new copy of an object or array, you must explicitly copy the properties of teh object or the elements of the array:

```javascript
let a = ["a", "b", "c"];
let b = [];
for(let i = 0; i < a.length; i++) {
    b[i] = a[i]
}
let c = Array.from(b);      // In ES6, copy arrays with Array.from()
```

___

## 3.9 Type Conversions

___

When JavaScript expects a boolean or a string, it will convert whatever value you give it to the type expected. The same is true for other types. Some examples:

```javascript
10 + " objects"     // => "10 objects"
"7" * "4"           // => 28
let n = 1 - "x"     // => n == NaN; string "x" can't convert to a number
n + " objects"      // => "NaN objects"; NaN converts to string "NaN"
```

### **3.9.1 Conversions and Equality**

```javascript
null == undefined   // => true: these two alues are treated as equal.
"0" == 0            // => true: string converts to a number before comparing.
0 == false          // => true: Boolean converts to number.
"0" == false        // => true: Both operands convert to 0 before comparing!

```

### **3.9.2 Explicit Conversions**

The simplest way to perform an explicit type conversion is to use the next functions:

```javascript
Number("3")     // => 3
String(false)   // => "false": Or use false.toString()
Boolean([])     // => true
```

Certain JavaScript operators perform implicit type conversions. If one operand of the + operator is a string, it converts the other one to a string. The unary + operator converts its operand to a number.

```javascript
x + ""  // => String(x)
+x      // => Number(x)
x-0     // => Number(x)
!!x     // => Boolean(x): not double!
```

The number class defines three methods for number-to-string conversions. *toFixed()*, *toExponential()* and *toPrecision()*. All three methods round the trailing digits or pad with zeros as appropiate.

```javascript
let n = 123456.789;
n.toFixed(0)        // => "1234567"
n.toFixed(5)        // => "123456.78900"
n.toExponential(3)  // => "1.23e+5"
n.toPrecision(4)    // => "1.23e+5"
n.toPrecision(7)    // => "123456.8"
n.toPrecision(10)    // => "123456.890"
```

To convet string to numbers, we also have *parseInt()* and *parseFloat()*

```javascript
parseInt("3 blind mice")    // => 3
parseFloat(" 3.14 meters")  // => 3.14
parseInt(".1")              // => NaN
parseFloat("$72.47")        // => NaN

parseInt("ff", 16)          // => 255
```

*parseInt()* accepts an optional argument specifying the radix (base) of the number to be parsed.

### **3.9.3 Object to Primitive Conversions**

Thes conversions are mor complex. Some types of objects have more than one primitive representation

#### **Object-to-boolean**

This one is trivial, all objects are true, including empty arrays and wrapper object *new Boolean(false)*.  

#### **Object to string**

This kind of conversion happens, for example, if you pass an object to a built-in function that expects a string argument

#### **Object to number**

Built-in functions and most JavaScript operators that expect numeric operands convert objects to number in this way

#### **Special case operator conversions**

The + operator. If either of its operands is an object, JavaScript converts them to primitive values using the *no-preference* algorithm. Then it checks their types. If either argument is a string, it converts the other to a string and concatenates the strings. Otherwise, it converts both to numbers and adds them

The == and != operators convert the object to primitive using the *no-preference* algorithm and then compare the two rimitive values.

The realational operators <, <=, >, >=. Convert the object using the *prefer-number* algorithm.

#### **The toString() and valueOf() methods**

All objects inherit thees two methods.

The default toString() method returns *"[object Objcet]"*, not very useful. Many classes define more specific versions of *toString()*.

The *valueOf()* method usually returns the object itself. The Date class returns the date in its internal representation: the number of milliseconds since January 1, 1970.

#### **Object-to-primitive conversion algorithms**

* The *prefer-string* algorithm first tries the *toString()* method. Then tries the *valueOf()* method. If not result the conversion fails with a TypeError.
* The *prefer-number* algorithm works similarly, but tries *valueOf()* first.
* The *no-preference* depends on the class of the object. If it's a Date, uses *prefer-string*, otherwise, it uses *prefer-number*

___

## 3.10 Variable Declaration and Assignment

___

In ES6 and later, this is done with the *let* and *const* keywords. Prior to ES6, variables where declared with var.

### **3.10.1 Declarations with let and const

```javascript
let i;
let sum;
// or
let i, sum;
// It is a good practice to assign an initial value when declaring the variable

let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x;

// If we don't specify an initial value, the value will be *undefined*

// Constants:
const H0 = 74;
const AU = 1.496E8;
// Any attempt to change a constant value causes a TypeError.
// It is a common convention to declare constants using names with all capital letters.
```

* We can also use const to declare the loop variable in a for loop.

#### **Variable and constant scope**

Variables and constatn declared wit *let* and *const* are block scoped. Roubhly speaking. if a variable or constant is declared within a set of curly braces, those curly braces delimit the region of code in which the variable is defined.  
When a declaration appears at the top level, outside of any code blocks, we say it is a *global* variable or constant and has global scope.

#### **Repeated declarations**

It is a syntax error to use the same name with more than one let or const declaration in the same scope.

#### **Declarations and types**

There is no type associated with JavaScript's variable declarations (we could use the extension TypeScript for that).

### **3.10.2 Varaiable Declarations with var**

The syntax of var is just like the syntax of let, but there are important differences in the way they work:

* Variables declared with var do not have block scope. Instead, they are scoped to the body of the containing function.
* If you use var outside of a function body, it declares a global variable. Global variables with var are implemented as properties of the global object, not the case for variables declared with let and const.
* Is legal to declare the same variable multiple times with var.
* Hoisting. When a variable is declared with var, the declaration is lifted up (or "hoisted") to the top of the enclosing function.

### **3.10.3 Destructuring Assignment**

In a destructuring assignment, the value on the righthand side of the equals sign is an array or object, and the lefhand side specifies one or more variable names using a syntax that mimix array and object literal syntax.

```javascript
let [x, y] = [1, 2]     // Same as let x=1, y=2
[x, y] = [x+1, y+1]     // Same as x = x + 1, y = y + 1
[x, y] = [y, x]         // Swapping values  
```

This makes it easy to work with functions that return arrays of values.
The number of variables on the left does not have to match the number of array elements on the right. extra variables on the left are set to *undefined*, and extra values on the right are ignored.  
If you want to collect all unused or remaining values into a single varaible, use three dots(...) before the last variable name on the left:

```javascript
let [x, y] = [1]            // y == undefined
let [x, ...y] = [1,2,3,4];  // y = [2,3,4]

// with nested arrays:
let [a, [b, c]] = [1, [2, 2.5], 3];     // a == 1; b == 2; c == 2.5
```

It does not actually require any array. You can use any iterable object on the righthand side of the assignment

```javascript
let [first, ...rest] = "Hello";  // first == "H"; rest == ["e","l","l","o"]

// with objects:
let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; 
let {r, b, b} = transparent;    // r == 0.0; g == 0.0; b == 0.0

// Copying global functions of the Math object into variables:
const {sin, cos, tan} = Math;
// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan

// If the lefthand side had included a variable whose name was not a property of Math, that variable would simply be assigned undefined.
// but variables don't need to have the same name:

const { cos: cosine, tan: tangent} = Math;
// Same as const cosine = Math.cos, tangent = Math.tan; 
```
