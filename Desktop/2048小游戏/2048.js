var board=new Array();
var score=0;
var isconflict=new Array();
$(document).ready(function(){
  newgame();
});
function newgame(){
    //初始化棋盘
    init();
    
    //随机生成数字
    generatenumber();
    generatenumber();

}
$(document).keydown(function (event){
   
    switch(event.keyCode)
    {
        case 37:
            if(moveleft())
            {
                setTimeout("generatenumber()",300);
                
            }
            isgameover();
            break;
            case 38:
                if(moveup())
                {
                    setTimeout("generatenumber()",300);
                    
                }
                isgameover();
                break;
            case 39:
            if(moveright())
            {
                setTimeout("generatenumber()",300);
               
            }
            isgameover();
            break;
            case 40:
            if(movedown())
            {
                setTimeout("generatenumber()",300);
              
            }
            isgameover();
            break;
    }
   
});
function init(){
    for (var i=0;i<4;i++)
    {
    board[i]=new Array();
    isconflict[i]=new Array();
    for (var j=0;j<4;j++)
    {
        var grid="#grid-"+i+"-"+j;
        $(grid).css('top',gettopposition(i,j));
        $(grid).css('left',getleftposition(i,j));
        board[i][j]=0;
        isconflict[i][j]=0;
    }
    }
    updateboard();
}
function updateboard(){
    $(".number").remove();
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++)
    {   
        $("#grid-square").append("<div class=\"number\" id=number-"+i+"-"+j+"></div>");
        var number="#number-"+i+"-"+j;
        if (board[i][j]==0)
        {
            $(number).css('height','0px');
            $(number).css('width','0px');
            $(number).css('top',gettopposition(i,j)+50);
            $(number).css('left',getleftposition(i,j)+50);
        }
        else{
            $(number).css('height','100px');
            $(number).css('width','100px');
            $(number).css('top',gettopposition(i,j));
            $(number).css('left',getleftposition(i,j));
            $(number).css('background-color',getbackgroundcolor(board[i][j]));
            $(number).css('color',getcolor(board[i][j]));
            $(number).text(board[i][j]);   
        }
        isconflict[i][j]=0;
    }
    }
}
function generatenumber(){
    
    if (nospace(board))
    return false;
    
    //生成位置

    var randomx=Math.floor(Math.random()*4);
    var randomy=Math.floor(Math.random()*4);
  
    while(true)
    {
        if (board[randomx][randomy]==0)
        break;
        var randomx=Math.floor(Math.random()*4);
        var randomy=Math.floor(Math.random()*4);
    }
    
    //生成2或4
    var randomnum=Math.random()<0.5?2:4;
    //显示生成的数
    /*console.log(randomnum);
    console.log(randomx);
    console.log(randomy);
    */
    board[randomx][randomy]=randomnum;
    showthenewnumber(randomnum,board,randomx,randomy)
    return true;
}
function moveleft(){
    //console.log(1);
    //console.log(canmoveleft(board));
    if (!canmoveleft(board))
    return false;
    //console.log(canmoveleft(board));
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++){
        if (board[i][j]!=0&&j>0)
        {
            for (var a=0;a<j;a++)
            {
            if (board[i][a]==0&&nobarrier(board,i,j,a))
            {
                showanimation(board,i,a,i,j);
                
                board[i][a]=board[i][j];
                
                board[i][j]=0;
                continue;
            }
            else if (board[i][j]==board[i][a]&&nobarrier(board,i,j,a)&&isconflict[i][a]==0)
            {
                showanimation(board,i,a,i,j);
                
                board[i][a]+=board[i][j];
                board[i][j]=0;
                score+=board[i][a];
                $("#score").text(score);
                isconflict[i][a]=1;
                continue;

            }
        }
        }
    }
        
    }
    setTimeout("updateboard()",200);
    return true;
}
function moveright(){
    //console.log(1);
    //console.log(canmoveleft(board));
    if (!canmoveright(board))
    return false;
    //console.log(canmoveleft(board));
    for (var i=0;i<4;i++)
    {
    for (var j=2;j>=0;j--){
        if (board[i][j]!=0&&j<3)
        {
            for (var a=3;a>=j+1;a--)
            {
            if (board[i][a]==0&&nobarrier(board,i,a,j))
            {
                showanimation(board,i,a,i,j);
                
                board[i][a]=board[i][j];
                
                board[i][j]=0;
                continue;
            }
            else if (board[i][j]==board[i][a]&&nobarrier(board,i,a,j)&&isconflict[i][a]==0)
            {
                showanimation(board,i,a,i,j);
                
                board[i][a]+=board[i][j];
                board[i][j]=0;
                score+=board[i][a];
                $("#score").text(score);
                isconflict[i][a]=1;
                continue;
            }
        }
        }
    }
        
    }
    setTimeout("updateboard()",200);
    return true;
}
function moveup(){
    //console.log(1);
    //console.log(canmoveleft(board));
    if (!canmoveup(board))
    return false;
    //console.log(canmoveleft(board));
    for (var j=0;j<4;j++)
    {
    for (var i=0;i<4;i++){
        if (board[i][j]!=0&&i>0)
        {
            for (var a=0;a<i;a++)
            {
            if (board[a][j]==0&&nobarriervertical(board,i,j,a))
            {
                showanimation(board,a,j,i,j);
                
                board[a][j]=board[i][j];
                
                board[i][j]=0;
                continue;
            }
            else if (board[i][j]==board[a][j]&&nobarriervertical(board,i,j,a)&&isconflict[a][j]==0)
            {
                showanimation(board,a,j,i,j);
                
                board[a][j]+=board[i][j];
                board[i][j]=0;
                score+=board[a][j];
                $("#score").text(score);
                isconflict[a][j]=1;
                continue;
            }
        }
        }
    }
        
    }
    setTimeout("updateboard()",200);
    return true;
}
function movedown(){
    //console.log(1);
    //console.log(canmovedown(board));
    if (!canmovedown(board))
    return false;
    //console.log(canmoveleft(board));
    for (var j=0;j<4;j++)
    {
    for (var i=3;i>=0;i--){
        if (board[i][j]!=0&&i<3)
        {
            //console.log(board[i][j],i,j);
            for (var a=3;a>=i+1;a--)
            {
            if (board[a][j]==0&&nobarriervertical(board,a,j,i))
            {
                showanimation(board,a,j,i,j);
                
                board[a][j]=board[i][j];
                
                board[i][j]=0;
                continue;
            }
            else if (board[i][j]==board[a][j]&&nobarriervertical(board,a,j,i)&&isconflict[a][j]==0)
            {
                showanimation(board,a,j,i,j);
                //console.log(a,j,i,j,board[i][j],board[a][j]);
                board[a][j]+=board[i][j];
                board[i][j]=0;
                score+=board[a][j];
                $("#score").text(score);
                isconflict[a][j]=1;
                continue;
            }
        }
        }
    }
        
    }
    setTimeout("updateboard()",300);
    return true;
}
function isgameover(){
    console.log(nospace(board),nomove(board));
    if (nospace(board)&&nomove(board))
    {
        //console.log(1);
        alert("Gameover! Caiji!");
        return true;
    }
    
    return false;
}