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


/*NOTE-JAVASCRIPT EXECUTION CONTEXT

1.GLOBAL EXECUTION CONTEXT -this k andar locate kiya jata h and result result back itno global EC
2.FUNCTION EXECUTION CONTEXT
3.EVAL EXECUTION CONTEXT

JAVASCRIPT RUNS IN TWO PHASE I)MEMORY CREATION PHASE-sb variable k nam lekr usme undefined rkha jata h,function k andar definition hati h
                             II)EXECUTION PHASE*/