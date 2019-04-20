//显示“缩略语列表”
function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement||!document.createTextNode) return false;
	//获取所有的缩略词
	var abbreviations=document.getElementsByTagName('abbr');
	if(abbreviations.length<1) return false;
	var defs= new Array();

	//遍历所有的缩略词并存在数组defs中
	for(var i=0;i<abbreviations.length;i++){
		if(abbreviations.childNodes.length<1) continue;
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].lastChild.nodeValue;
		defs[key]=definition;
	}

	//创建定义列表
	var dlist=document.createElement("dl");

	//遍历所有定义
	for(key in defs){
		var definition=defs[key];
		//创建定义标题及标题文本
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述及描述文本
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1)return false;

	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChlid(header_text);

	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);


}
addLoadEvent(displayAbbreviations);
