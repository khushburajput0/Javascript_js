/* Immediate Invoked Function Expressions(IIFE) */

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

//()()-iife

( (name) => {
    //unnamed IIFE
    console.log(`DB Connected two ${name}`);
})('khushu')