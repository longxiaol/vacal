(function (doc, win) {
            var docEl = doc.documentElement,
                // orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
                // onresize 事件会在窗口或框架被调整大小时发生。
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    window.clientWidth = docEl.clientWidth;
                    if (!window.clientWidth) return;
                    docEl.style.fontSize = 100 * (window.clientWidth / 375) + 'px';
                    window.base = 100 * (window.clientWidth / 375);
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            // DOMContentLoaded火狐特有的事件，DOM加载完后触发
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);