var a = 6;
var num = Number(prompt("Guess a number!"));

while(num != a){
  if (num < a ) {
    alert("guess a lil higher");
  }
  else if (num > a){
    alert("guess a lil lower");
  }
  var num = Number(prompt("Guess a number!"));
}
alert("Bingo!!");
