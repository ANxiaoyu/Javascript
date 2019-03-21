function getStyle(obj,name) //取样式
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]; //IE浏览器
	}
	else
	{
		return getComputedStyle(obj,false)[name];//火狐和谷歌浏览器
	}
}

//startMove(oDiv,{width:10,height:10})
function startMove(obj,json,fnEnd)//attr表示样式
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;   //假设：所有值的变化都已经到了目标值
		
		for(var attr in json)
		{
			var cur=0;
			if(attr=="opacity")
			{
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);//Math.round四舍五入
			}
			else
			{
				cur=parseInt(getStyle(obj,attr))
			}
		
			var speed=(iTarget-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
			if(cur!=json[attr])
			   bStop=false;
			
			
				if(attr=='opacity')
				{
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
				}
				else
				{
					obj.style[attr]=cur+speed+'px';
				}
			
		}

		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
		
	},30);
}