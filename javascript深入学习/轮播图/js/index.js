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
}
box.onmouseout = function () {
    arr.style.display = 'none';
}

// 4 点击箭头实现上一张和下一张的功能
// 默认是第一张图片的索引
var index = 0;
// 下一张
arrRight.onclick = function () {
    index++;
    if(index < count) {
        // 让对应的序号li高亮显示
        ol.children[index].click();
    }
}

// 上一张
arrLeft.onclick = function() {
    index--;
    if(index >= 0) {
        ol.children[index].click();
    }
}
// 5 自动切换图片