// 0 获取元素
var box = document.getElementById('box');
var content = document.getElementById('content');
var scroll = document.getElementById('scroll');
var bar = document.getElementById('bar');

// 1 根据内容大小计算滚动条高度
// box的高度 / content的高度 = bar的高度 / scroll的高度
var barHeight = 0;
if(content.scrollHeight > box.offsetHeight) {
    barHeight = box.offsetHeight / content.scrollHeight * scroll.offsetHeight;
}
bar.style.height = barHeight + 'px';

// 2 拖动滚动条
// 2.1 鼠标在bar上按下的时候，计算鼠标在bar中的位置
bar.onmousedown = function (e) {
    e = e || event;
    // 鼠标在bar中的位置
    var barY = getPage(e).pageY - box.offsetTop - bar.offsetTop;
    // 2.2 鼠标在页面移动的时候，计算bar在父容器中的坐标
    document.onmousemove = function(e) {
        e = e || event;
        // bar在父容器的位置
        var y = getPage(e).pageY - box.offsetTop - barY;

        // 限制y不能越界
        y = y < 0 ? 0 : y;
        // bar最大移动的距离
        var barMaxY = scroll.offsetHeight - barHeight;
        y = y > barMaxY ? barMaxY : y;
        bar.style.top = y + 'px';


        // 3 当拖动滚动条的时候，移动内容
        // bar移动的距离 / 内容移动的距离 = bar最大移动的距离 / 内容最大移动的距离
        // 内容移动的距离 = bar移动的距离 * 内容最大移动的距离 / bar最大移动的距离
        // 内容最大移动的距离
        var contentMaxY = content.scrollHeight - box.offsetHeight;
        var contentY = y * contentMaxY / barMaxY;
        content.style.top = -contentY + 'px';
    }
}

// 当鼠标弹起的时候，移除移动事件
document.onmouseup = function () {
    document.onmousemove = null;
}
