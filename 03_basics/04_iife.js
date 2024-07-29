// Immediately Invoked Function Expression (IIFE)
//jo function immediately execute ho jaye
//global scope ke pollution se problem se bachne ke liye IIFE use krte hai

(function chai(){    //named iife
    //also called named iifi
    console.log(`hii Anurag`)
})();    //semicolon has to be used 

( (name) => {      //unnamed iife
    console.log(`hii Anurag, hello ${name}`)
})('sam')

