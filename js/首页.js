var close_=document.getElementsByClassName('close_')[0];
// console.log(close_);
var tc=document.getElementsByClassName('tc')[0];
// console.log(tc);
close_.onclick=function(){
    tc.style.display='none';
}
var zf_ipt=document.getElementsByClassName('zf_ipt')[0];
var tz=document.getElementsByClassName('tz')[0];
var btn=document.getElementsByClassName('sear_')[0];
btn.ontouchstart=function(){
    if(zf_ipt.value=='二手房'){
       tz.action='./3.二手房列表页.html'
    }else if(zf_ipt.value=='租房'){
        tz.action='./5.租房列表页.html'
    }
    
}