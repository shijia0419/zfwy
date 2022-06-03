(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})();
var fy_=document.getElementsByClassName('fy')[0];
var xq_=document.getElementsByClassName('xq')[0];
var xf=document.getElementsByClassName('xf')[0];
var kf=document.getElementsByClassName('kf')[0];
fy_.onclick=function(){
    alert('请先登录')
}
xq_.onclick=function(){
    alert('请先登录')
}
xf.onclick=function(){
    alert('请先登录')
}
kf.onclick=function(){
    alert('请先登录')
}