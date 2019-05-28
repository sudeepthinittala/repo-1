
                var map=[
                    [-1,0,0,0,0,0,0,0,1,1],
                    [1,1,0,0,1,1,1,1,0,1],
                    [0,1,0,1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,1,1,1,1],
                    [1,1,0,0,10,0,1,0,0,1],
                    [1,1,1,1,1,0,0,1,0,1],
                    [1,1,0,0,1,1,0,1,0,1],
                    [0,1,1,1,1,1,1,1,1,1],
                    [0,1,1,1,0,0,1,1,1,1]
                ]
                var Score=1;
                var curr={
                    x:0,
                    y:0
                }
                function displayScore(){
                    if(map[curr.x][curr.y] === 1){
                    Score=Score+1;
                    }
                }
                function drawGameBoard(){
                    document.getElementById("row").innerHTML="";
                    for(var x=0;x<map.length;x=x+1){
                        for(var y=0;y<map[x].length;y=y+1){
                            console.log(map[x][y]);
                            if(map[x][y] === 1){
                                document.getElementById('row').innerHTML+="<div class='dot'></div>";
                            }
                            else if(map[x][y] === 0){
                                document.getElementById('row').innerHTML+="<div class='block'></div>";
                            }
                            else if(map[x][y] === -1){
                                document.getElementById('row').innerHTML+="<div class='user'></div>";
                            }
                            else if(map[x][y]=== 3){
                                document.getElementById('row').innerHTML+="<div class='blank'></div>";
                            }
                            else if(map[x][y]=== 10){
                                document.getElementById('row').innerHTML+="<div class='dotblue'></div>"
                            }
                        }
                        document.getElementById('row').innerHTML+="<br>";
                    }
                    document.getElementById('Score').innerHTML="<div class='Score'>SCORE:</div>"+Score;
                }
                drawGameBoard();
                document.onkeydown= function(e){  
                if (e.keyCode == 37) {
                   // bottom
                   if(map[curr.x][curr.y-1]!==0 && map[curr.x][curr.y-1]<map.length){
                    if(map[curr.x][curr.y-1]===10){
                        displayScore();
                        newdrawGameBoard();
                        alert("GAME OVER");
                    }
                        map[curr.x][curr.y]=3;
                        curr.y=curr.y-1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        drawGameBoard();
                   }
                    else{
                        newdrawGameBoard();
                        alert("GAME OVER");

                    }
                }
                else if (e.keyCode== 39 ) {
                        //up
                        if(map[curr.x][curr.y+1]!==0 && map[curr.x][curr.y+1]<map.length){
                            if(map[curr.x][curr.y+1]===10){
                                displayScore();
                                newdrawGameBoard();
                                alert("GAME OVER");
                            }
                        map[curr.x][curr.y]=3;
                        curr.y=curr.y+1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        drawGameBoard();
                        }
                        else{
                            displayScore();
                            newdrawGameBoard();
                            alert("GAME OVER");
                            
                        }
                     }
                else if (e.keyCode== 40) { 
                        //right
                        if(map[curr.x+1][curr.y]!==0 && map[curr.x +1][curr.y]<map.length){
                            if(map[curr.x+1][curr.y]===10){
                                displayScore();
                                newdrawGameBoard();
                                alert("GAME OVER");
                            }
                        map[curr.x][curr.y]=3;
                        curr.x=curr.x+1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        drawGameBoard();
                        
                        }
                        else{
                            displayScore();
                            newdrawGameBoard();
                            alert("GAME OVER");
                           
                        }
                    }
                else if (e.keyCode== 38) { 
                   //left
                        if(map[curr.x-1][curr.y]!==0 && map[curr.x-1][curr.y]<map.length){
                            if(map[curr.x-1][curr.y]===10){
                                displayScore();
                                newdrawGameBoard();
                                alert("GAME OVER");
                            }
                        map[curr.x][curr.y]=3;
                        curr.x=curr.x-1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        drawGameBoard();
                        
                        }
                        else{
                            displayScore();
                            newdrawGameBoard();
                            alert("GAME OVER");
                            
                        }
                    }
                }
                function newdrawGameBoard(){
                     map=[
                        [-1,0,0,0,0,0,0,0,1,1],
                        [1,1,0,0,1,1,1,1,0,1],
                        [0,1,0,1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,1,1,1,1],
                        [1,1,0,0,10,0,1,0,0,1],
                        [1,1,1,1,1,0,0,1,0,1],
                        [1,1,0,0,1,1,0,1,0,1],
                        [0,1,1,1,1,1,1,1,1,1],
                        [0,1,1,1,0,0,1,1,1,1]
                    ]
                    curr={
                        x:0,
                        y:0
                    }
                    Score=0;
                    drawGameBoard();
                }
    