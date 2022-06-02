var lis_=document.getElementsByClassName('area');
var area_cont=document.getElementsByClassName('area_cont')[0];
var lis_price=document.getElementsByClassName('lis_price')[0];
var lis_fx=document.getElementsByClassName('lis_fx')[0];
var more_cot=document.getElementsByClassName('more_cot')[0];
var area_=document.getElementsByClassName('area')[0];
var price=document.getElementsByClassName('price')[0];
var fx=document.getElementsByClassName('fx')[0];
var more=document.getElementsByClassName('more')[0];
var mb=document.getElementsByClassName('mb')[0];
// console.log(price);
// console.log(area_);
// console.log(li_1);
area_.onclick=function(){
    area_.style.backgroundImage='url(../img/SecondHandList/arrow-up.png)';
    price.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    fx.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    more.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    
}  
price.onclick=function(){
    price.style.backgroundImage='url(../img/SecondHandList/arrow-up.png)';
    area_.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    fx.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    more.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
} 
fx.onclick=function(){
    fx.style.backgroundImage='url(../img/SecondHandList/arrow-up.png)';
    price.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    area_.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    more.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
}  
more.onclick=function(){
    more.style.backgroundImage='url(../img/SecondHandList/arrow-up.png)';
    price.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    area_.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    fx.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
} 
lis_[0].ontouchstart=function(){
    area_cont.style.display='block';
    lis_price.style.display='none';
    lis_fx.style.display='none';
    more_cot.style.display='none';
    mb.style.display='block'
}
lis_[1].ontouchstart=function(){
    lis_price.style.display='block'
    area_cont.style.display='none';
    lis_fx.style.display='none';
    more_cot.style.display='none';
    mb.style.display='block'

}
lis_[2].ontouchstart=function(){
    lis_fx.style.display='block';
    lis_price.style.display='none'
    area_cont.style.display='none';
    more_cot.style.display='none';
    mb.style.display='block'
}
lis_[3].ontouchstart=function(){
    more_cot.style.display='block'
    lis_fx.style.display='none';
    lis_price.style.display='none'
    area_cont.style.display='none';
    mb.style.display='block'
}
mb.onclick=function(){
    mb.style.display='none'
    more_cot.style.display='none'
    lis_fx.style.display='none';
    lis_price.style.display='none'
    area_cont.style.display='none';
    more.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    price.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    area_.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
    fx.style.backgroundImage='url(../img/SecondHandList/arrow.png)';
}
