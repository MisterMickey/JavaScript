/*
There are 7 primitive Data Types in JS:

Number: The Number type is a double-precision 64-bit binary format IEEE 754 value having -(2^53 − 1) (Number.MIN_SAFE_INTEGER) to 
        2^53 − 1 (Number.MAX_SAFE_INTEGER).

Boolean: Represents true or false value

BigInt: With BigInts, you can safely store and operate on large integers even beyond the safe integer limit 
        (Number.MAX_SAFE_INTEGER) for Numbers.

        A BigInt is created by appending n to the end of an integer or by calling the BigInt() function.
        const x = BigInt(Number.MAX_SAFE_INTEGER);
        x + 1n === x + 2n; // false
        
String: The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing   
        UTF-16 code units.

Symbol: A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

NaN: NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic
      operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.
      
Null: The Null type is inhabited by exactly one value: null.

Undefined: undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an 
            excuse for typeof null === "object").

*/
