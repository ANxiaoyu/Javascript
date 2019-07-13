// 定时器的时间间隔
var interval = 2000;
// 0 获取元素
var box = document.getElementById('box');
var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];

// 获取箭头的容器 arrow
var arr = document.getElementById('arr');
var arrLeft = arr.children[0];
var arrRight = arr.children[1];

// 获取图片的宽度
var imgWidth = screen.offsetWidth;

// 1 动态生成序号li
// 获取图片的个数
var count = ul.children.length;
var i = 0;
for (; i < count; i++) {
    // 创建序号
    var li = document.createElement('li');
    ol.appendChild(li);
    setInnerText(li, i+1);

    // 3 点击序号li切换图片
    // li 记录它自己的索引
    li.index = i;
    // 3.1 给序号li注册点击事件
    li.onclick = liClick;
    // 3.4 让第一个序号默认选中
    if(i == 0) {
        li.className = 'current';
    }
}
    function liClick() {
        // 3.2 让图片以动画的方式移动
        animate(ul, -this.index * imgWidth);
        // 3.3 让所有的序号li取消高亮显示，让当前li高亮显示
        for(i = 0; i < count; i++) {
            li = ol.children[i];
            li.className = '';
        }
        this.className = 'current';

        // 3.5 点击序号li,重新记录全局的index
        index = this.index;
    }


// 2 鼠标经过显示箭头，离开隐藏箭头
box.onmouseover = function () {
    arr.style.display = 'block';
    // 5.1 关闭定时器
    clearInterval(timerId);
}
box.onmouseout = function () {
    arr.style.display = 'none';
    // 5.2 鼠标离开，开启定时器
    timerId = setInterval(function(){
        arrRight.click();
    },interval);
}

// 4 点击箭头实现上一张和下一张的功能
// 默认是第一张图片的索引
var index = 0;
// 4.1 下一张
arrRight.onclick = function () {
    // 当是克隆的第一张图片（真正的最后一张图片）的时候，偷偷的把ul设置到真正的第一张图片的位置
    if (index === count) {
        index = 0;
        ul.style.left = '0px';
    }

    index++;
    if(index < count) {
        // 让对应的序号li高亮显示
        ol.children[index].click();
    }else {
        // 以动画的方式切换到克隆的第一张图片
        animate(ul, -index * imgWidth);
        // 取消所有的序号li的高亮显示
        for (i = 0; i < count; i++){
            li = ol.children[i];
            li.className = '';
        }
        ol.children[0].className = 'current';
    }
}

// 4.2 上一张
arrLeft.onclick = function() {
    // 判断index === 0 如果是第一张，偷偷的切换到克隆的第一张（真正的最后一张）
    if (index === 0) {
        index = count;
        ul.style.left = -index * imgWidth + 'px';
    }
    index--;
    //if(index >= 0) {
        ol.children[index].click();
    //}
}

// 4.3 无缝滚动
// 复制第一个li,并且添加到ul的最后
// cloneNode 的参数 true  会复制子元素
// cloneNode 的参数 false  不会复制子元素
var cloneLi = ul.children[0].cloneNode(true);
ul.appendChild(cloneLi);

// 5 自动切换图片
var timerId = setInterval(function(){
    arrRight.click();
},interval);