var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  //generate all new colorDisplay
  colors = generateRandomColors(6);
  //pick a new random color from an array
  pickedColor = pickColor();
  //change color display to match picked colors
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323"
})

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listener to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color
    console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
      message.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!"
    }
  });
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num){
  //make and array
  var arr = []
  //add num random colors to array
  for(var i = 0; i < num; i++){

    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  //pick a "red" 0 - 255
  var r = Math.floor(Math.random() * 256)
  //pick a "green" 0 - 255
  var g = Math.floor(Math.random() * 256)
  //pick a "blue" 0 - 255
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r +  ", " + g + ", " + b + ")";
}
