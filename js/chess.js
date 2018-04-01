var flag=true;
var chess=document.getElementById('chess');
var context=chess.getContext('2d');//得到绘图环境
var ChessBoard=[];
for(var i=0;i<15;i++)
{
	ChessBoard[i]=[];
	for(var j=0;j<15;j++)
	{
		ChessBoard[i][j]=0;
	}
}
context.strokeStyle="#BFBFBF";
//画背景
var logo=new Image();
logo.src="images/logo.jpg";
logo.onload=function()
{
	context.drawImage(logo,0,0,450,450);
	drawChessBoard();
}

//画棋盘
var drawChessBoard=function(){
	for(var i=0;i<15;i++)
	{
		//画纵线
		context.moveTo(15+30*i,15);
		context.lineTo(15+30*i,435);
		context.stroke();
		//画横线
		context.moveTo(15,15+30*i);
		context.lineTo(435,15+30*i);
		context.stroke();
	}
}

//落子
var oneStep=function(i,j,flag){
	context.beginPath();
	context.arc(15+30*i,15+j*30,13,0,2*Math.PI);//画圆
	context.closePath();
	var gradient=context.createRadialGradient(15+30*i+2,15+j*30-2,13,15+30*i+2,15+j*30-2,0);//设置渐变
	if(flag)
	{
		//画黑子
		gradient.addColorStop(0,"#0A0A0A");
		gradient.addColorStop(1,"#636766");
	}
	else{
		//画白子
		gradient.addColorStop(0,"#D1D1D1");
		gradient.addColorStop(1,"#F9F9F9");
	}
	context.fillStyle="#636766"; //填充颜色
	context.fillStyle=gradient;
	context.fill();
}

chess.onclick=function(e){
	var x=e.offsetX;  //相对于原点的坐标
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	if(ChessBoard[i][j]==0)
	{
		oneStep(i,j,flag);
		if(flag)
		{
			ChessBoard[i][j]=1;
		}
		else{
			ChessBoard[i][j]=2;
		}
		flag=!flag;
	}

}
	


