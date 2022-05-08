var squares = [];
var pieces = [];
function preload() {

}

function setup() {
  createCanvas(400,400);
for (y=0;y<height;y+=50)
{
for (x=0;x<width;x+=50);
{
square = new Square(x,y);
squares.push(square);
}
 }
pieces.push(new rook(spuares[0],1));
pieces.push(new knight(spuares[1],1));
pieces.push(new Bishop(spuares[2],1));
pieces.push(new queen(spuares[3],1));
pieces.push(new king(spuares[4],1));
pieces.push(new Bishop(spuares[5],1));
pieces.push(new knight(spuares[6],1));
pieces.push(new rook(spuares[7],1));
for(i=8;i<16;i++){
pawn = new Pawn(squares[i],1);
pieces.push(pawn);
}
for(i=48;i<56;i++){
  pawn = new Pawn(squares[i],1);
  pieces.push(pawn);
  }
}

function draw() {

  }

