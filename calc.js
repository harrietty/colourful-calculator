
// Declare variables and display workingSum on the placeholder

var workingSum = "";
var val = "";
var placeholder = document.getElementById("answer");
var answer = 0;
var prevAns;
var pressEquals = false;



// Make the clear button work
function clearWorking() {
 		 workingSum = "";
 		 pressEquals = false;
  		placeholder.innerHTML = "";
	}

$("#clear").click(function() {
	clearWorking();
});



function clickNumber(i) {

  $("#" + i).click(function(){
  pressEquals = false;
  workingSum += i;
  placeholder.innerHTML = workingSum;
  console.log(workingSum);
});
}


clickNumber("1");
clickNumber("2");
clickNumber("3");
clickNumber("4");
clickNumber("5");
clickNumber("6");
clickNumber("7");
clickNumber("8");
clickNumber("9");
clickNumber("0");

$("#point").click(function(){
  workingSum += ".";
  placeholder.innerHTML = workingSum;
  console.log(workingSum);
});


// Make the operator buttons work


//On click make plus sign work
$("#plus").click(function(){
  // If equals has been pressed, capture the previous answer to use again
  if(pressEquals==true){
    workingSum=prevAns;
    pressEquals = false;
  }
  //Add the sign to the string in the calculator's display
  workingSum += " + ";
  placeholder.innerHTML = workingSum;
  console.log(workingSum);
});


//On click make minus sign work
$("#minus").click(function(){
  // If equals has been pressed, capture the previous answer to use again
  if(pressEquals==true){
    workingSum=prevAns;
    pressEquals = false;
  }
  //Add the sign to the string in the calculator's display
  workingSum += " - ";
  placeholder.innerHTML = workingSum;
  console.log(workingSum);
});


//On click make 
$("#multiply").click(function(){
  // If equals has been pressed, capture the previous answer to use again
  if(pressEquals==true){
    workingSum=prevAns;
    pressEquals = false;
  }
  //Add the sign to the string in the calculator's display
  workingSum += " x ";
  placeholder.innerHTML = workingSum;
  console.log(workingSum);
});


//On click
$("#divide").click(function(){
  // If equals has been pressed, capture the previous answer to use again
  if(pressEquals==true){
    workingSum=prevAns;
    pressEquals = false;
  }
  //Add the sign to the string in the calculator's display
  workingSum += " &#247; ";
  placeholder.innerHTML = workingSum;
  console.log(workingSum);
});




// On click make equals sign work


function printanswer(i) {
  placeholder.innerHTML = i;
}


$("#equals").click(function(){
  // If user has not enetered any info, or if the = sign has just been pressed, return 0
  if(workingSum===""){
     placeholder.innerHTML = "0";
     pressEquals = false;
  }

  // So long as the operation doesn't contain syntax errors
  else if(workingSum.indexOf("x &#247;") > -1 || workingSum.indexOf("&#247; x" > -1) || workingSum.indexOf("x x") > -1 || workingSum.indexOf("&#247; &#247;") > -1 || workingSum.indexOf("x x") > -1) {

      // replace division and multiply signs by mathmatical operators
      workingSum = workingSum.replace("x", "*");
      workingSum = workingSum.replace("&#247;", "/");

      // If the user has pressed an operator prior to equals, remove it.
     lastChar = workingSum.charAt(workingSum.length-2);
      if(lastChar==="+" || lastChar==="-" || lastChar==="*" || lastChar==="/" ){
          workingSum = workingSum.slice(0, length-2);
       }

      // Evaluate and print the answer
      answer = (eval(workingSum));
      console.log(answer);
      printanswer(answer);

      // Save the answer for future use & empty out the workingSum string
      prevAns = String(answer);
      workingSum = "";
      pressEquals = true;
  }
});






// Display the final answer
function printanswer(answer) {
  placeholder.innerHTML = answer;
}






