function positionMessage(){
	if(!document.getElementById)return false;
	if(!document.getElementById("message"))return false;
	var elem=document.getElementById("message");  //先给message元素设置初始位置
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="100px";
	moveElement("message",200,200,20);

	var elem=document.getElementById("message2"); //给message2元素设置初始位置
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="500px";
	moveElement("message2",200,200,20);
}
addLoadEvent(positionMessage);