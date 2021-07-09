# Chapter 5. Statements

Expressions are evaluated to produce a value, statements are executed to make something happen.  
A JavaScript program is simply a sequence of statements, separated from one another with semicolons.

___

## 5.1 Expression Statements

___

The simplest kinds of statements in JavaScript are expressions that have side effects.

* Assignment statements.
* The increment and decrement operators (++ and --).
* The *delete* operator.
* Function calls.

___

## 5.2 Compound and Empty Statements

___

A statement block is simply a sequence of statements enclosed within curly braces. The empty statement allows you to include no statements where one is expected (;).

```javascript
// Initialize an array a
for(let i = 0; i < a.length; a[i++] = 0) /*empty*/ ;
```

___

## 5.3 Conditionals

___

Conditional statements execute or skip other statements depending on the value of a specified expression. They are also sometimes known as "branches".

### **5.3.1 if**

```javascript
if (expression)
    statement;
// example
if (!username) username = "John Doe";
```

JavaScript syntax requires a single statement after the if keyword and parenthesized expression, but you can use a statement block to combine multiple statements into one:

```javascript
if (!adress) {
    address  = "";
    message = "Please specify a mailing address.";
}
```

The second form of the if statement introduces an else clause that is executed when *expression* is false:

```javascript
if (expression)
    statement1
else
    statement2

// example:
if (n=== 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);
```

### **5.3.2 else if**

When you need to execute one of many pieces of code, you can to it with an *else if* statement.

```javascript
if (n === 1) {
    // execute code block #1
} else if (n === 2) {
    // execute code block #2
} else {
    // If all else fails, execute block #3
}
```

### **5.3.3 switch**

When all of the branches depend on the value of the same expression, is wasteful to repeatedly evaluate that expression in multiple if statements.

```javascript
switch(n){
    case 1:         // Start here if n === 1
        // Execute code block #1
        break;      // Stop here
    case 2:         // Start here if n === 2
        // Execute code block #2
        break;      // Stop here
    case 3:         // Start here if n === 3
        // Execute code block #3
        break;      // Stop here
    default:        // If all else fails...
        // Execute code block #4
        break;      // Stop here
}
```

The break statement causes the interpreter to jump to the end (or "break out") of the switch statement.

___

## 5.4 Loops

___

One common use for loops is to iterate over the elements of an array

### **5.4.1 while**

The while statement is JavaScript basic loop.

```javascript
while (expression)
    statement

let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}
```

If the expression is truthy, the interpreter executes the statement and repeats, jumping back to the top of the loop and evaluating *expression* again.

### **5.4.2 do/while**

is like a while loop, except that the loop expression is tested at the bottom of the loop. This means that the body of the loop is always executed at least once.

```javascript
do
    statement
while (expression);
```

### **5.4.3 for**

```javascript
for(initialize; test; increment)
    statement
// Example
for(let count = 0; count < 10; count++){
    console.log(count);
}
```

Multiple variables can change with each iteration of the loop.

```javascript
let  i, j, sum = 0;
for(i = 0, j = 0; i < 10; i++, j--){
    sum += i * j;
}
```

### **5.4.4 for/of**

The *for/of* loop works with iterable objects.

```javascript
let data = [1,2,3,4,5,6,7,8,9], sum = 0;
for(let element of data){
    sum += element;
}
sum     // => 45
```

The loop body runs once for each element of the data array.  
Arrays are iterated "live" --Changes made during the iteration may affect the outcome of the iteration.

#### **for/of with objects**

Objects are not (by default) iterable. Attemptingto use for/of on a regular object throws a TypeError at runtime.  
To iterate through the properties of an object, you can use the for/in loop, or use for/of with the *Object.keys()* method:

```javascript
let o = { x: 1, y: 2, z: 3};
let keys = "";
for (let k of Object.keys(o)) {
    keys += k
}
keys    // => "xyz"
```

If you are interested in both the keys and the values of an object's properties, you can use for/of with Object.entries() and destructuring assignment:

```javascript
let pairs = "";
for (let [k,v] of Object.entries(o)) {
    pairs += k + v;
}
pairs   // => "x1y2z3"
// Object.entries() returns an array of arrays, where each inner array represents a key/value pair for one property of the object.
```

#### **for/of with strings**

Strings are iterable character-by-character in ES6. Note that strings are iterated by Unicode codepoint, not by UTF-16 character. The string "I♥🐕" has a .length of 5 (because two emoji characters each require two UTF-16 characters to represent). But if you iterate that string with for/of, the body will run three times, once for each of the three code points.

#### **for/of with Set and Map**

The built-in ES6 Set and Map classes are iterable.  
Map iterate the key/value pairs.

```javascript
let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    key     // => 1
    value   // => "one"
}
```

#### **Asynchronous iteration with for/await**

A variant of the for/of loop that works with asynchronous iterators.

### **5.4.5 for/in**

Looks a lot like a for/of loop, but it works with any object after the in. It loops through the property names of a specified object.

```javascript
for(let p in o) {
    console.log(o[p])   // Print the value of each property
}

let o = { x: 1, y: 2, z: 3};
let a = [], i = 0;
for(a[i++] in o) /*empty*/
// Copies the names of all object properties into an array
```

The for/in loop does not enumerate properties whose names are symbols.

___

## 5.5 Jumps

___

This statements cause the JavaScript interpreter to jump to a new location in the source code.
JavaScript allows statements to be named or labeled, and break and continue can identify the target loop or other statement label.

### **5.5.1 Labeled Statements**

Any statement may be labeled by preceding it with an identifier and a colon:

```javascript
identifier: statement
```

### **5.5.2 break**

The break statement, used alone, causes the innermost enclosing loop or switch statement to exit immediately.  
JavaScript also allows the break keyword to be followed by a statement label (just the identifier, with no colon).

### **5.5.3 continue**

The continue statement is similar to the break statement. Instead of exiting a loop, however, continue restarts a loop at the next iteration.  
The continue statement can also be used with a label, but only inside the body of a loop.

### **5.5.4 return**

A return statement within a function specifies the value of invocations of that function.  
A return statement may only appear within the body of a function.  
If there is no return statement. the invocation expression evaluates to *undefined*

### **5.5.5 yield**

Is similar to the return statement but is used only in ES6 generator functions to produce the next value in the generated sequence of values without actually returning

### **5.5.6 throw**

An exception is a signal that indicates that some sort of exceptional condition or error has occurred. To *throw* an exception is to signal such an error or exceptional condition. To *catch* an exception is to handle it.  
Exceptions are caught with the try/catch/finally statement. When an exception is thrown, the JavaScript interpreter immediately stops normal program execution and jumps to the nearest exception handler.

### **5.5.7 try/catch/finally**

This statement is JavaScript's exeption handling mechanism.  
The *try* clause simply defines the block of code whose exceptions are to be handled.  
The *catch* clause is a block of statements that are invoked when an exception occurs anywhere within the try block.  
The *finally* block contains cleanup code that is guaranteed to be executed, regardless of what happens in the try block.

Note that the caatch keyword is generally followed by an identifier in parentheses. This identifier is like a function parameter. When an exception is caught, the value associated with the exception (an Error object, for example) is assigned to this parameter. The identifier associated with a catch clause has block scope.

___

## 5.6 Miscellaneous Statements

___

### **5.6.1 with**

The with statement runs a block of code as ifthe propertie of a specified object were variables in scope for that code.

```javascript
with (object)
    statement
```

The with statement is forbidden in strict mode and should be considered deprecated in non-strict mode: **avoid using it whenever possible**.

### **5.6.2 debugger**

In practice, this statement acts like a reak-point.

### **5.6.3 "use strict"**

Is a directive introduced in ES5. It can appear only at the start of a script or at the start of a function body, before any real statements have appeared.  
In addition to code explicitly declared to be strict, any code in a class body or in an ES6 module is automatically strict code.

Strict mode is arestricted subset of the language that fixes important language deficiencies and provides stronger error checking and increased security.

Differences with non-strict mode:

* The with statement is not allowed in strict mode.
* All variables must be declared.
* In strict mode, functions invoked as functions (rather than as methods) have a this value of undefined.
* In strict mode, a SyntaxError is thrown if the delete operator is followed by an unqualified identifier such as a variable, function, or function parameter.
* In strict mode, it is a syntax error for an object literal to define two or more properties by the same name.
* In strict mode, it is a syntax error for a function declaration to have two or more parameters with the same name.
* *See more advanced diferences in the book

___

## 5.7 Declarations

___

### **5.7.1 const, let, and var**

Variables declared with var are scoped to the containing function rather than the containing block. This can be a source of bugs and in modern JavaScript there is really no reason to use var instead of let.

### **5.7.2 fuction**

Is used to define function. Creates a function object and assigns it to the specified name. The function declarations in any block of JavaScript code are processed before that code runs, and the function names are bound to the function objects throughout the block.

### **5.7.3 class**

Creates a new class and gives it a name that we can use to refer to it.  
Class declarations are not hoisted.

### **5.7.4 import and export**

The import and export declarations are used together to make values defined in one module of JavaScript code available in another module.
