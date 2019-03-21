function ajax(url, fnSucc, fnFaild)
{
	//1.创建Ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest(); //非IE6浏览器
	}
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");  //IE6
	}

	//2.连接服务器
	//open(方法，文件名，异步传输)
	oAjax.open('GET', url, true);

	//3.发送请求
	oAjax.send();

	//4.接受返回
	oAjax.onreadystatechange=function()
	{
		//oAjax.readyState //浏览器和服务器，进行到哪一步了
		if(oAjax.readyState==4)  //读取完成
		{
			if(oAjax.status==200)  //成功
			{
				fnSucc(oAjax.responseText); //成功，显示内容
			}
			else
			{
				if(fnFaild)
				{
					fnFaild(oAjax.status);  //失败，显示失败原因
				}
				//alert('失败:'+oAjax.status);
			}

		}
	}
}