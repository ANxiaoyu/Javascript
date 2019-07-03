// 写一个函数，处理innerText和textContent的兼容性问题

//获取元素之间的内容
function  getInnerText(element) {
    //判断element是否支持innerText
    if(typeof element.innerText === 'string'){
        return element.innerText;
    }else {
        return element.textContent;
    }
}
//设置元素之间的内容
function setInnerText(element, content) {
    //判断element是否支持innerText
    if(typeof element.innerText === 'string') {
        element.innerText = content;
    }else {
        element.textContent = content;
    }
}

// 获取min-max之间的随机整数
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}