var space=" ";
var sharp="#";
var size=8;
var board="";
for(var i=0;i<size;i++){
  	for(var j=0;j<size;j++){
      if ((i+j)%2 == 0) {
      	board=board+space;
      }
      else{
      	board=board+sharp;
      }     
    }
  board=board+"\n";
}
console.log(board);