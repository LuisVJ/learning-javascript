# Chapter 4. Expressions and operators

An expression is a phrase of JavaScript that can be evaluated to produce a value.

___

## 4.1 Primary Expressions

___

Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references.  
When any identifier appears by itself in a program, JavaScript assumes it is a variable or constant or property of the global object and looks up its value. If no variable with that name exists, throws a ReferenceError.

___

## 4.2 Object and Array Initializers

___

Are expressions whose value is a newly created object or array. Also called object literals and array literals.

```javascript
// Array initializers
[]          // Empty array
[1+2, 3+4]  // [3, 7] array
let matrix = [[1,2,3], [4,5,6], [7,8,9]]    // Nested array
// Undefined elments can be included in an array literal
let sparseArray [1,,,,5];

// Object initializers
let p = { x: 3.4, y: -1.2}; // Object with 2 properties
let q = {};                 // Empty object
q.x = 2.3; q.y = -1.2;      // Now q has the same properties as p

// In ES6, object literals have a much more feature-rich syntax
let rectangle = {
    upperLeft: { x: 2, y: 2},
    lowerRight: { x: 4, y: 5}
}
```

___

## 4.3 Function Definition Expressions

___

A function definition expression defines a JavaScript function, ad the value of such an expression is the newly defined function.

```javascript
let square = function(x) { return x * x;};
```

___

## 4.4 Property Access Expressions

___

A property access expression evaluates to the value of an object property or an array element.

```javascript
let o = {x: 1, y: {z: 3}};
let a = [o, 4, [5, 6]];
o.x         // => 1: property x of expression o
o.y.z       // => 3: property z of expression o.y
o["x"]      // => 1: property x of object o
a[1]        // => 4: element at index 1 of expression a
a[2]["1"]   // => 6: element at index 1 of expression a[2]
a[0].x      // => 1: property x of expression a[0]
```

### **4.4.1 Conditiona Property Access**

ES2020 adds two new kinds of property access expressions:

* *expression* ?. *indentifier*
* *expression* ?.[ *expression* ]

In JavaScript, the values null and undefined are the only two values that do not have properties. In a regular property access expression using . or [], you get a TypeError if the expression on the left evaluates to null or undefined. You can use ?. and ?.[] syntax to guard against errors of this type. It also works for longer "chained" property access expressions:

```javascript
let a = {b: null};
a.b?.c.d    // => undefined, c and d are never evaluated
(a.b?.c).d      // will throw a TypeError

// Another example:
let a;              // not initialized.
let index = 0;
try {
    a[index++];     // Throws TypeError
} catch(e) {
    index           // => 1: increment occurs before TypeError is thrown
}
a?.[index++]        // => undefined: because a is undefined
index               // => 1: not incremented because ?.[] short-circuits
a[index++]          // !TypeError: can't index undefined.
```

___

## 4.5 Invocation Expressions

___

An invocation expression is JavaScript's syntax for calling (or executing) a function or method.

```javascript
f(0)
Math.max(x,y,z)
a.sort()
```

If the function doesn't uses the return statement to return a value, the value of the invocation expressin is *undefined*.

### **4.5.1 Conditional Invocation**

In ES2020 you can also invoke a function using ?.() instead of ().

```javascript
// Before ES2020
function square(x, log) { // The second argument is an optional function
    if (log) {            // If the optinal function is passed  
        log(x);           // Invoke it
    }
    return x * x;
}

// ES2020
function square(x, log) {
    log?.(x);               // Call the function if there is one
    return x * x;
}
```

Note that ?.() only checks whether the lefthand side is null or undefined. It does not verify that the value is actually a function.

___

## 4.6 Object creation Expresions

___

An object creation expression creates a new object and invokes a function (constructor) to initialize the properties of that object. If no arguments are passed to the constructor function in an object creation expression, the empty pair of parentheses can be omitted.

```javascript
new Object()
new Point(2, 3)
```

___

## 4.7 Operator Overview

___

### **4.7.1 Number of Operands**

### **4.7.2 Operand and Result Type**

Some operators work on values of any type, but most expect their operands to be of a specific type, and most operators return a value of a specific type. JavaScript operators usually convert the ype of their operands as needed.

___

## 4.8 Arithmetic Expressions

___

* ** -> exponentiation
* \* -> Multiplication
* / -> Division
* % -> Modulo
* \+ -> Addition
* \- -> Subtraction

In JavaScript all numbers are floating-point, so all division operations have floating-point results.  
While the modulo operator is typically used with integer operands, it also works for floating-point values.

### **4.8.1 The + Operator**

The conversion rules for + give priority to string concatenation: if either of the operands is a string or an object that converts to a string, the other operand is converted to a string and concatenation is perofrmed.

### **4.8.2 Unary Arithmetic Operators**

Unary operators modify the value of a single operand to produce a new value ( +, -, ++, and --).

* Unary plus(+): Converts its operand to a number (or to NaN) and returns the converted value.
* Unary minus (-): converts its operand to a number, if necesary, and then canges the sign of the result.
* Increment (++): Converts its operand to a number, adds 1 to that number, and assigns the incremented value back into the variable, element, or property.  
The return value depends on its position relative to the operand.

```javascript
let i = 1, j = ++i;     // i and j are both 2
let n = 1, m = n++;     // n is 2, m is 1
```

* Decrement (--): Similar to the Increment operator

### **4.8.3 Bitwise Operators**

Perform low-level manipulation of the bits in the binary representation of numbers. These operators are not commonly used in JavaScript programming.

* Bitwise AND (&)
* Bitwise OR (|)
* Bitwise XOR (^)
* Bitwise NOT (~)
* Shift left (<<)
* Shift right with sign (>>)
* Shift right with zero fill (>>>)

___

## 4.9 Relational Expresssions

___

These operators test for a relationship (such as "equals", "less than", or "property of") between two values and return *true* or *false*. Relational expressions always evaluate to a boolean value.

### **4.9.1 Equality and Inequality Operators**

The == and === operators check whether two values are the same, using two different definitions of sameness.  
The === operator checks whether its two operands are "identical" using a strict definition of sameness. The == allows type conversions.

The != and !== operators test the exact opposite of the == and === operators.

Is best practice to almost always use === and !== operators.

* If one value is *NaN* === will always be false. use *isNan()* instead.

### **4.9.2 Comparison Operators**

* Less than (<)
* Greater than (>)
* Less than or equal (<=)
* Greather than or equal (>=)

Comparison can be performed only on numbers and strings, however, so operands that are not numbers or strings are converted.

* **IMPORTANT:** the <= and >= operators do not relay on equality. They are defined as "not greater than" and "not less than".

### **4.9.3 The in Operator**

Expects a left-side operand that is a string, symbol, or value that can be converted to a string. It expects a right-side operand that is an object. It evaluates to true if the left-side value is the name of a property of the right-side object.

### **4.9.4 The instanceof Operator**

Expects a left-side operand that is an object and a right-side operand that identifies a class of objects.  
Note that all objects are instances of *Object*. instanceof considers the "superclasses" when deciding whether an object is an instance of a class.

___

## 4.10 Logical Expressions

___

The logical operators perform Boolean algebra.

### **4.10.1 Logical AND (&&)**

The value on the right-side may or may not be evaluated, depending on if the value on the left side is falsy (short-circuiting). This behavior can be exploited:

```javascript
if (a === b) stop();
(a === b) && stop();    // does the same thing
```

### **4.10.2 Logical OR (||)**

If one or both operands is truthy, it returns a truthy value. If both operands are falsy, it returns a falsy value.  
It will short-circuit if the first value is truthy without evaluating the expression on the right-side.

An exploit of this side-effect:

```javascript
let max = maxWidth || preferences.maxWidth || 500;
// 500 will act as a default value, if the previous values are falsy.
```

### **4.10.3 Logical NOT (!)**

It is placed before a single operand. It inverts the boolean value of its operand.

___

## 4.11 Assignment Expressions

___

JavaScript uses the = operator to assign a value to a variable or property.

### **4.11.1 Assignment with Operation**

We can combine assignmet with some other operations.

* +=
* -=
* *=
* /=
* %=
* **=
* There are also bitwise operators.

___

## 4.12 Evaluation Expressions

___

JavaScript has the ability to interpret strings of JavaScript source code, evaluating them to produce a value.

```javascript
eval("3+2")     // => 5
```

*eval()* can be a security hole, and you should never pass any string derived from user input to eval(). Because of this. some web servers use the HTTP "Content-Security-Policy" header to disable eval() for an entire website.

___

## 4.13 Miscellaneous Operators

___

### **4.13.1 The conditional Operator (?:)**

Is the only ternary operator in JavaScript, and sometimes is called the *ternary operator*.  
The first operand is evaluated and interpreted as a boolean. If the value is truthy, then the second operand is evaluated, and its value is returned. Otherwise, the third operand is evaluated and its value is returned.

```javascript
greeting = "hello" + (username ? username: "there"); 
// Is equivalent to
greeting = "hello";
if (username) {
    greeting += username;
} else {
    greeting += "there";
}
```

### **4.13.2 First-Defined (??)**

Evaluates to its first defined operand: if its left operand is not *null* and not *undefined*, it returns that value. Otherwise, it returns the value of the right operand.  
Examples:

```javascript
let options = { timeout: 0, title: "", verbose: false, n: null};
options.timeout ?? 1000     // => 0
options.title ?? "Untitled" // => ""
options.verbose ?? true     // => false
options.quiet ?? false      // => false: property is not defined
options.n ?? 10             // => 10: property is null
```

### **4.13.3 The typeof Operator**

Its value is a string that specifies the type of the operand

* undefined -> "undefined"
* null -> "object"
* true or false -> "boolean"
* any number or NaN -> "number"
* any BigInt -> "bigint"
* any string -> "string"
* any symbol -> "symbol"
* any function -> "function"
* any nonfunction object -> "object"

### **4.13.4 The delete Operator**

Is a unary operator that attempts to delete the object property or array element specified as its operand. When we delete an array element, the array length doesn't change even when that element doesn't exist anymore.

### **4.13.5 The await Operator**

*await* was introduced in ES2017 as a way to make asynchronous programming more natural in JavaScript. More in later chapters.

### **4.13.6 The void Operator**

*void* is a unary operator that appears before its single operand. It evaluates its operand, then discards the value and returns *undefined*. Using the void operator only makes sense if the operand has side effects.
