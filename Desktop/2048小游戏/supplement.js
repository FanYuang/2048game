function gettopposition(i,j){
    return 20+120*i;

}
function getleftposition(i,j){
    return 20+120*j;

}
function getbackgroundcolor(num){
    switch(num)
{
    case 2:
        return "purple";
        break;
    case 4:
        return "pink";
        break;
    case 8:
        return "brown";
        break;
    case 16:
        return "grey";
        break;    
    case 32:
        return "black";
        break;
    case 64:
        return "yellow";
        break;
    case 128:
        return "red";
        break;
    case 256:
        return "green";
        break;    
   
}
}
function getcolor(num){
    switch(num)
{
    case 2:
        return "white";
        break;
    case 4:
        return "grey";
        break;
    default:  
        return "blue";
}
}
function nospace(board){
 
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++)
    {   
        console.log(i,j,board[i][j]);
        if (board[i][j]==0)
        return false;
       
    }
}
    return true;
}
function showthenewnumber(randomnum,board,randomx,randomy)
{
    var number="#number-"+randomx+"-"+randomy;
    //console.log(number);
    $(number).text(randomnum);
    //console.log(number.width);
    $(number).css('height','100px');
            $(number).css('width','100px');
            $(number).css('background-color',getbackgroundcolor(randomnum));
            $(number).css('color',getcolor(randomnum));

            
            $(number).animate(
                {
                    left:getleftposition(randomx,randomy),
                    top:gettopposition(randomx,randomy)
                }
                ,50
            )
}
function canmoveleft(board){
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++){
        //console.log(board[i][j],i,j,board[i][j-1]);
        if (board[i][j]!=0&&j>0)
        {
            if (board[i][j-1]==0||board[i][j]==board[i][j-1])
            return true;
          
        }

    }
}

    return false;
}


function canmoveright(board){
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++){
        if (board[i][j]!=0&&j<3)
        {
            if (board[i][j+1]==0||board[i][j]==board[i][j+1])
            return true;
          
        }

    }
    
}
return false;
}
function canmoveup(board){
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++){
        if (board[i][j]!=0&&i>0)
        {
            if (board[i-1][j]==0||board[i-1][j]==board[i][j])
            return true;
          
        }

    }
   
}
return false;
}
function canmovedown(board){
    for (var i=0;i<4;i++)
    {
    for (var j=0;j<4;j++){
        //console.log(i,j,board[i][j],board[i+1][j]);
        if (board[i][j]!=0&&i<3)
        {
            if (board[i+1][j]==0||board[i+1][j]==board[i][j])
            return true;
          
        }

    }
  
}
return false;
}
function nobarrier(board,i,j,a){
    if (a+1==j)
    return true;
    for (var k=a+1;a<j;a++)
    {
       if (board[i][k]!=0)
       return false;
    }
    return true;

}
function nobarriervertical(board,i,j,a){
    if (a+1==i)
    return true;
    for (var k=a+1;a<i;a++)
    {
       if (board[k][j]!=0)
       return false;
    }
    return true;

}
function showanimation(board,i,a,b,j){
    var number="#number-"+b+"-"+j;
    $(number).animate(
        {
            left:getleftposition(i,a),
            top:gettopposition(i,a),

        }
        ,300
    )
}
function nomove(board){
    if (canmovedown(board)==false&&canmoveup(board)==false&&canmoveleft(board)==false&&canmoveright(board)==false)
    return true;
    return false;
}

