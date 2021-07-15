# Chapter 6. Objects

Objects are JavaScripts's most fundamental datatype.

___

## 6.1 Introduction to Objects

___

An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name. An object is an unordered collection of properties, each of which has a name and a value.  
Properties are usually strings, so we can say that objects map strings to values.  
A JavaScript object also inherits the properties of another object, known as its "prototype".

Objects are mutable and manipulated by reference rather than by value.

A property has a name and a value. A property name may be any string, including the empty string (or any Symbol), but no object may have two properties with the same name.

JavaScript uses the term *own property* to refer to non-inherited properties.

In addition to its name and value, each property has three property attributes.

* The *writable* attribute specifies wether the value of the property can be set
* The *enumerable* attribute specifies whether the property name is returned by a for/in loop
* The *configurable* attribute specifies whether the property can be deleted and whether its attributes can be altered.

By default, all properties of the objects you create are writable, enumerable, and configurable.

___

## 6.2 Creating Objects

___

### **6.2.1 Object literals**

The easiest way to create an object is to include an object literal in your JavaScript code.

```javascript
let empty = {};
let point = { x: 0, y: 0};
let p2 { x: point.x, y: point.y+1};
let book = {
    "main title": "JavaScript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};
```

### **6.2.2 Creating Objects with new**

The *new* operator creates and initializes a new object. The *new* keyword must be followed by a function invocation. A function used in this way is called a *constructor* and serves to initialize a newly created object.

```javascript
let o = new Object();
let a = new Array();
let d = new Date();
let r = new Map();
```

### **6.2.3 Prototypes**

Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a *prototype*.

*Object.prototye* is one of the rare objects that has no prototype: it does not inherit any properties. A  Date object created by *new Date()* inherits properties from both Date.prototype and Object.prototype. This linked sries of prototype objects is known as a *prototype chain*

### **6.2.4 Object.create()**

Object.create() creates a new object, using its first argument as the prototype of that object:

```javascript
let o1 = Object.create({x:1, y:2}); // o1 inherits properties x and y.
o1.x +o1.y                          // => 3
```

You can pass null to create a new object that does not have a prototype, it will not inherit anything.

One use for Object.create() is when you want to guard against unintended modification of an object by a library function that you don't have control over.

___

## 6.3 Querying and Setting Properties

___

To obtain the value of a property, we can use the dot (.) or square bracket ([]) operators. To create or set a property, we use the same operators, but put them on the lefthand side of an assignment expression.

### **6.3.1 Objects As Associative Arrays**

JavaScript objects are associative arrays.

### **6.3.2 Inheritance**

JavaScript objects have a set of "own properties" and they also inherit a set of properties from their prototype object.

```javascript
let o ={};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();       // toString is inherited from Object.prototype
q.x + q.y                   // => 3; x and y are inherited from o and p
```

Overriding iherited properties.

```javascript
let unitcircle = { r: 1};           // An object to inherit from
let c = Object.create(unitcircle);  // c inherits the property r
c.x = 1; c.y = 1;                   // c defines two properties of its own;
c.r = 2;                            // c overrides its inherited property
unitcircle.r                        // => 1: the prototype is not affected
```

### **6.3.3 Property Access Errors**

It is not an error to query a property that does not exist. If the property x is not found as an own property or an inherited property of o, the property access expression o.x evaluates to *undefined*.

It is an error, however, to attempt to query a property of an object that does not exist.  
Property access expressions will fail if the lefthand side of the . is *null* or *undefined*.

To prevent against this problem:

```javascript
// an explicit technique
let surname = undefined;
if (book) {
    if (book.author) {
        surname = book.author.surname;
    }
}

// A concise and idiomatic alternative
surname = book && book.author && book.author.surname;

// ES2020 conditional
let surname = book?.author?.surname;
```

Attempting to set a property on null or undefined also causes a TypeError.

___

## 6.4 Deleting Properties

___

The *delete* operator removes a property from an object.

```javascript
delete book.author;
delete book["main title"];
```

The delete operator only deletes own properties, not inherited ones.  
*delete* does not remove properties that have a configurable attribute of *false*.

___

## 6.5 Testing Properties

___

You can test if an object has a property with the *hasOwnProperty()* and *propertyIsEnumerable()* methods, or simply by querying the property.

```javascript
let o = { x: 1};
"x" in o        // => true
"y" in o        // => false
"toString" in o // => o inherits a toString property

o.hasOwnProperty("toString")    // => false: toString is an inherited property

// is often sufficient to simply query the property and use !== to make sure it is not undefined

o.x !== undefined   // => true
o.y !== undefined   // => false
o.toString !== undefined    // => true
```

However the in operator can distinguish between propertis that do not exist and properties that exist but have been set to undefined.

___

## 6.6 Enumerating Properties

___

Built-in methods that objects inherit are not enumerable, but the properties that your code adds to objects are enumerable by default.

As an alternative to using a for/in loop, is often easier to get an array of property names and then loop through that array with a for/of loop.

* Object.keys() -> returns an array of the names of the enumerable own properties of an object.
* Object.getOwnPropertyNames() -> returns an array olf the names of non-enumerable own properties as well, as long as their names are strings.
* Obejct.getOwnPropertySymbols() -> returns own properties whose names are Symbols, whether or not they are enumerable.
* Reflect.ownKeys() returns all own property names, buth enumerable and non-enumerable, and both string and Symbol.

### **6.6.1 Property Enumeration Order**

* String properties whose names are non-negative integer are listed first, in numeric order from samllest to largest.
* After all properties that look like array indexes are listed, all remaining properties with string names are listed in the order in which they were added to the object.
* Finally, the properties whose names are Symbol objects are listed in the order in which they were added to the object.

___

## 6.7 Extending Objects

___

A common operation in JavaScript programs is needing to copy the properties of one object to another:

```javascript
let target = { x:1 }, source = {y: 2, z: 3};
for(let key of Object.keys(source)){
    taget[key] = source[key];
}
target  // => {x: 1, y: 2, z: 3}
```

\**Object.assign()* expects two or more objects as its arguments. The first one is the target and the others are sources.

```javascript
o = Object.assign({}, defaults, o)
// This will copy the default values and then override with the ones that already exist in o
```

___

## 6.8 Serializing Objects

___

Object serialization is the process of converting an object's state to a strin from which it can later be restored.

```javascript
let o = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(o);  // s == '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s);      // p == {x: 1, y: {z: [false, null, ""]}}
```

JSON syntax is a subset of JavaScript syntax, and it cannot represent all JavaScript values. NaN, Infinity, and -Infinity are serialized to null. Date objects are serialized to ISO-formated date strings, but JSON.parse() leaves these in string form and does not restore the original Date object.  
JSON.stringify() serializes only the enumerable own properties of an object.

___

## 6.9 Object Methods

___

### **6.9.1 The toString() Method**

It takes no arguments; it returns a string that somehow represents the value of the object on which is invoked.

### **6.9.2 The toLocacleString() Method**

The purpose of this method is to return a localized string representation of the object.

### **6.9.3 The valueOf() Method**

Similar to the toString() method, but it is called when JavaScript needs to convert an object to some primitive type other than a string.

### **6.9.4 The toJSON() Method**

Object.prototype does not actually define a toJSON() method, but the JSON.stringify() method looks for a toJSON() method on any object it is asked to serialize.

___

## 6.10 Extended Ojbect Literal Syntax

___

### **6.10.1 Shorthand Properties**

```javascript
let x = 1, y = 2;
lt o = {x, y};
o.x + o.y   // => 3
```

### **6.10.2 Computed Property Names**

```javascript
const PROPERTY_NAME = "p1";
fucntion computerPropertyName() {return "p" + 2;}

let p = {
    [PROPERTY_NAME]: 1,
    [computerPropertyName()]: 2
}

p.p1 + p.p2     // => 3
```

### **6.10.3 Symbols as Property Names**

You can use symbols as property names, to avoid duplicates in objects you don't control its source.

### **6.10.4 Spread Operator**

In ES2018 and later, you can copy the properties of an existing object into a new object using the "spread operator" ... inside an object literal:

```javascript
let position = {x: 0, y: 0};
let dimensions = { width: 100, height: 75};
let rect = {...position, ...dimensions};
rect.x + rect.y + rect.width + rect.height  // => 175
```

The spread operator only spreads the own properties of an object, not any inherited ones.

### **6.10.5 Shorthand Methods**

When a function is defined as a property of an object, we call that function a *method*.

```javascript
//prior to ES6
let square = {
    area: function() {return this.side * this.side},
    side: 10
 }

//IN ES6
let square = {
    area() {return this.side * this.side},
    side: 10
 }
```

### **6.10.6 Property Getters and Setters**

If a property has both a getter and a setter method, it is a read/write property. If it has only a getter method, it is a read-only property. And if it has only a setter method, it is a write-only property.
