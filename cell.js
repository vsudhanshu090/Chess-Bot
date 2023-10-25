function makegrid(){
    //makes cells for the grid
    for (var j=0;j<rows;j++){
        for (var i=0;i<cols;i++){
            var square = new Square(i,j);
            board.push(square);
        }
    }
}
makegrid();

function showgrid(){
    //displays the whole grid
    for (var i = 0; i < board.length; i++)
        board[i].show();    
}


function Square(i,j){
    this.i = i;
    this.j = j;
    this.piece = null;

    this.index = function (x,y){
        //returns index of (x,y) in 2-d board array
        if (x<0 || y<0 || y>=rows || x>=cols)
            return -1;
        return x*8 + y;
    }

    this.drawline = function (a,b,x,y){
        //draws a straight line from (a,b) to (x,y)
        c.strokeStyle = 'black';   
        c.lineWidth = 3;       
        c.beginPath();
        c.moveTo(a, b);    
        c.lineTo(x, y);  
        c.stroke();  
    }

    //shows the current square
    this.show = function() {
        var x = this.i * w;
        var y = this.j * w;

        if ((i+j)%2 == 0)
            c.fillStyle = "#F5F5DC";
        else
            c.fillStyle = "#8B4513";
        c.fillRect(x, y, w, w);
        
        this.drawline(x, y, x + w, y);
        this.drawline(x + w, y, x + w, y + w);
        this.drawline(x + w, y + w, x, y + w);
        this.drawline(x, y + w, x, y);

        pieceimg = document.getElementById(this.piece);
        if (this.piece != null)
            c.drawImage(pieceimg,x,y,w,w);
    }
}

function initialsetup(){
    board[0].piece = "br";
    board[1].piece = "bn";
    board[2].piece = "bx";
    board[3].piece = "bq";
    board[4].piece = "bk";
    board[5].piece = "bx";
    board[6].piece = "bn";
    board[7].piece = "br";
    for (var i = 8; i < 16; i++) {
        board[i].piece = "bp";
    }

    board[56].piece = "wr";
    board[57].piece = "wn";
    board[58].piece = "wx";
    board[59].piece = "wq";
    board[60].piece = "wk";
    board[61].piece = "wx";
    board[62].piece = "wn";
    board[63].piece = "wr";
    for (var i = 48; i < 56; i++) {
        board[i].piece = "wp";
    }

    showgrid();
    console.log("hi");
}
window.onload = initialsetup();
