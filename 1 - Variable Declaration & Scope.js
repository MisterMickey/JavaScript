/*
Variable can be declared in JS using : let, const, & var keyword

var	                                              let	                                                        const

functional scope                               block scope	                                               block scope
updated and re-declared           	updated but cannot be re-declared into the scope	        cannot be updated or re-declared into the scope.
declared without initialization.	        declared without initialization.	                     cannot be declared without initialization.
accessed without initialization             can't => ‘referenceError’                           it cannot be declared without initialization.
hoisting done with ‘default’ value	    Hoisting is done , but not initialized  	              Hoisting is done, but not initialized 
*/


	const a = {
		prop1: 10,
		prop2: 9
	}
	
	// It is allowed
	a.prop1 = 3

	// It is not allowed
	a = {
		b: 10,
		prop2: 9
	}


    let a = 10
 
    // It is not allowed
    let a = 10
 
    // It is allowed
    a = 10
