" use strict ";

var display = document.getElementById("display");

var lineBreak = "<br>";

function oneToTen (){
  var output = "oneToTen()" + lineBreak;
  output += " ***Output***" + lineBreak;
  for(i = 1; i < 11; i++){
    output += i + lineBreak;
  }
  display.innerHTML = output;
}

function oddNumbers(){
  var output = "oddNumbers()" + lineBreak;
  output += " ***Output***" + lineBreak;
  for(i = 1; i < 20; i+=2){
    output += i + lineBreak;
  }
  display.innerHTML = output;
}

function squares(){
  var output = "squares()" + lineBreak;
  output += " ***Output***" + lineBreak;
  for(i = 1; i < 11; i++){
    output += Math.pow(i, 2) + lineBreak;
  }
  display.innerHTML = output;
}

function random4(){
  var output = "random4()" + lineBreak;
  output += " ***Output***" + lineBreak;
  for(i = 0; i < 4; i++){
    output += Math.floor(Math.random() * 100) + lineBreak;
  }
  display.innerHTML = output;
}

function even(n){
  var output = "even(20)" + lineBreak;
  output += " ***Output***" + lineBreak;
  for(i = 2; i < n; i+=2){
    output += i + lineBreak;
  }
  display.innerHTML = output;
}

function powers(n){
  var output = "powers(8)" + lineBreak;
  output += " ***Output***" + lineBreak;
  for(i = 1; i <= n; i++){
    output += Math.pow(2, i) + lineBreak;
  }
  display.innerHTML = output;
}


function areWeThereYet(){
  var output = '"Arewethereyet?"' + lineBreak;
  var answer;
    do {
          answer = prompt("Arewethereyet?");
          display.innerHTML += output + answer + lineBreak;
    }
    while (answer !== "Yes")
      display.innerHTML += "Good!";



  /*
  var question = "Arewethereyet?" + lineBreak;
  var userInput = prompt("Arewethereyet?");
  var output = question;

  while (userInput != "Yes") {
    output += userInput;
    output += lineBreak + question;
  }
    output += userInput;
    output += "Good!"

    display.innerHTML = output;
    */
}


function triangle(){
  var output = "triangle()" + lineBreak;
  output += "***Output***" + lineBreak;
  for(i = 1; i < 6; i++){
    output += "";
    for(j= 0; j < i ; j++){
      output += "*"
    }
    output += lineBreak;
  }

  display.innerHTML = output;
}

// thanks StackOverflow for the unicode character
// http://stackoverflow.com/questions/33539797/how-to-create-string-with-multiple-spaces-in-javascript

function tableSquare(){
  var output = "tableSquare()" + lineBreak;
  output += "***Output***" + lineBreak;
  output += "A4x4tablesquare" + lineBreak;
  for(i =1; i <=4; i++){
      output += "|";
    for(j = 1; j <=4; j++){
      if(j >2 && i*j < 10){
        output += "\xa0\xa0";
      }
      output += i*j + "|";
    }
    output += lineBreak;
  }
  display.innerHTML = output;
}

function tableSquares(n){
  var output = "tableSquare(6)" + lineBreak;
  output += "***Output***" + lineBreak;
  output += "A6x6tablesquare" + lineBreak;
  for(i =1; i <=n; i++){
      output += "|";
    for(j = 1; j <=n; j++){
      if( i*j < 10){
        output += "\xa0\xa0";
      }
      output += "\xa0" + i*j + " |";
    }
    output += lineBreak;
  }
  display.innerHTML = output;
}
