var phone=document.getElementsByTagName('p')[2];
var tel_=document.getElementsByClassName('tel')[0];
console.log(tel_);
// var yzm_=document.getElementsByClassName('yz')[0];
// var send_=document.getElementsByClassName('send')[0];
// console.log(phone);
// phone.onfocus=function(){
//    tel_.innerHTML='请输入手机号'
// }
tel_.onblur=function(){
    if(tel_.value==''){
       tel_.placeholder='手机号不能为空';
       return false;
    }
    var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if(!reg.test(tel_.value)){
    //   tel_.placeholder='输入格式有误';
    alert('手机号输入格式有误')
      return false;
    }else{
        return true;
    }
}
var yzm_=document.getElementsByClassName('yz')[0];
var send_=document.getElementsByClassName('send')[0];
console.log(yzm_);
console.log(send_);
send_.onclick=function(){
    var num=60;
    var timer=setInterval(function(){
        num--;
        send_.innerHTML=num;
        if(num==54){
         clearInterval(timer);
         send_.innerHTML='6 6 6 8 8 8 '
         send_.style.color='red';
         send_.style.fontsize='1.8rem'
        }
    },1000)
}
yzm_.onblur=function(){
    if(yzm_.value==''){
     yzm_.placeholder='验证码不能为空';
     return false;
    }else if(yzm_.value!=666888){
    //   yzm_.innerHTML='验证码输入错误';
    alert('验证码输入错误')
    return false;
    }else{
        return true;
    }
    
}
var psd_=document.getElementsByClassName('psd')[0];
console.log(psd_);
psd_.onblur=function(){
    if(psd_.value==''){
       psd_.placeholder='密码不能为空';
       return false;
    }
    var reg=/^\w{6,12}$/;
    if(!reg.test(psd_.value)){
        alert('密码长度不在范围内或存在非法字符');
        return false;
    }
    var reg1=/^\d{6,12}$/;
    if(reg1.test(psd_.value)){
        alert('密码不能全为数字');
        return false;
    }
    var reg2=/^[A-z]{6,12}$/;
    if(reg2.test(psd_.value)){
        alert('密码不能全为字母');
        return false;
    }else{
        return true;
    }
}
var psd1_=document.getElementsByClassName('psd1')[0];
console.log(psd1_);
psd1_.onblur=function(){
    if(psd1_.value==''){
     psd1_.placeholder='密码不能为空';
     return false;
      
    }else if(psd_.value!=psd1_.value){
       alert('密码输入不一致');
       return false;
    }else{
        return true;
    }
}
var btn=document.getElementsByTagName('button')[0];
console.log(btn);
btn.onclick=function(){
    if(tel_.value==''||yzm_.value==''||psd_.value==''||psd1_.value==''){
        alert('输入内容不能为空');
        return false;
    }else if(psd_.value!=psd1_.value){
         alert('两次密码不一致');
         return false;
    }else{
        return true;
    }
}