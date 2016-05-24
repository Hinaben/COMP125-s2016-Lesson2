/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
         var firstPTag = document.getElementById("firstParagraph");
//event listener click
firstPTag.addEventListener("click",firstParagraphClicked);

//event listener hover
firstPTag.addEventListener("mouseover",firstParagrapHover);

var firstParagraphIsClicked = false ;
var firstParagraphwasHovered = false;
    
    // code codes in here 
    console.log("App Started...");
    
     var myFirstParagraph = "This is my first paragraph. I am writing this for demonstration purpose. " + 
     "this is the third sentence of my first paragraph";
     
    //declare name function 
    function writeToFirstParagraph(){
        //for debugging only
        console.log("Executing WriteToFirstParagaph");
        
      // create a reference to a p element with an id of "firstParagraph"
    
     firstPTag.textContent = myFirstParagraph;
      
    }
    //event handler for firstParagraph clicked
    function firstParagraphClicked(){
     if(firstParagraphIsClicked){
       firstPTag.style.color = "black";
       firstParagraphIsClicked = false;
     } else {
     firstPTag.style.color = "red"; 
     firstParagraphIsClicked = true;
     }
    }
    
      //event handler
    function firstParagrapHover(){
     if(firstParagraphwasHovered){
       firstPTag.style.color = "black";
       firstParagraphwasHovered = false;
     } else {
     firstPTag.style.color = "green"; 
     firstParagraphwasHovered = true;
     }
    }
    
    /*
    //declare a var that points to anonymous funciton
      var writeToFirstParagraph = function(){
        //for debugging only
        console.log("Executing WriteToFirstParagaph");
        
      // create a reference to a p element with an id of "firstParagraph"
     var firstPTag = document.getElementById("firstParagraph");
    
     firstPTag.textContent = "It's alive!!!";
      
    }
    */
   
    //execute funciton 
    writeToFirstParagraph();
    
  //  consol.log(firstPTag);
    
})();