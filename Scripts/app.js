/* Main JavaScript file */

// IIFF - Immediately invokked function expression
(function(){
    "use strict";
    //code codes in here
    console.log("App Started..");
    //create refrence to a p elevment with an id of "firstParagraph"
    var firstParagraph = document.getElementById("firstParagraph");
    
    firstParagraph.textContent = "It's alive!!";
    
})();