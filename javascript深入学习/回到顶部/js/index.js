// 0 获取元素
var divTop = document.getElementById('top');
var totop = document.getElementById('totop');

// 1 当拖动滚动条的时候，当页面滚动出去的距离超过10px,设置top的类样式，显示回到顶部
// 1.1 注册页面的滚动事件
window.onscroll = function () {
    // 1.2 判断当前页面滚动出去的距离是否超过10px
    var scrollTop = getScroll().scrollTop;
    if(scrollTop >= 10) {
        // 1.3 设置top的类样式，显示回到顶部
        divTop.className = 'header fixed';
        totop.style.display = 'block';
    }else {
        divTop.className = 'header';
        totop.style.display = 'none';
    }
}

// 2 点击回到顶部，以动画的方式，让页面滚动出去的距离为0
var timerId = null;
totop.onclick = function () {
    if(timerId) {
        clearInterval(timerId);
    }

    timerId = setInterval(function() {
        var target = 0;
        var step = 10;
        var current = getScroll().scrollTop;

        if(current > target) {
            step = -Math.abs(step);
        }

        if(Math.abs(current - target) <= Math.abs(step)) {
            clearInterval(timerId);
            // 设置目标位置
            document.documentElement.scrollTop = target;
            document.body.scrollTop = target;
            return;
        }
        current += step;
        document.documentElement.scrollTop = current;
        document.body.scrollTop = current;
    },5);
}