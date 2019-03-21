function Drag(id)
{
	var _this=this;
	this.oDiv=document.getElementById(id);
	this.disX=0;
	this.diaY=0;

	this.oDiv.onmousedown=function(ev)
	{
		_this.fnDown(ev);
	};
}

Drag.prototype.fnDown=function(ev) //鼠标按下
{
	var _this=this;
	var oEvent=ev||event;
		//确定鼠标相对于div的固定位置
	this.disX=oEvent.clientX-this.oDiv.offsetLeft; //鼠标距离div的左边距
	this.disY=oEvent.clientY-this.oDiv.offsetTop;//鼠标距离div的上边距

	document.onmousemove=function(ev)
	{
		_this.fnMove(ev);
	};
    document.onmouseup=function()
    {
    	_this.fnUp();
    };
	return false; //解决火狐bug

}

Drag.prototype.fnMove=function(ev) //鼠标按下后移动
{
	
	var oEvent=ev||event;
	//根据鼠标坐标确定div的坐标
	
	//解决用户把框拖出页面
			
	this.oDiv.style.left=oEvent.clientX-this.disX+'px';
	this.oDiv.style.top=oEvent.clientY-this.disY+'px';
}

Drag.prototype.fnUp=function() //鼠标抬起停止移动
{
	document.onmousemove=null;
	document.onmouseup=null;
}