var input = document.getElementsByTagName('input')[0];
console.log(input1);
var input1 = document.getElementsByTagName('input')[1];
var registerBtn = document.getElementsByClassName('registerBtn')[0];
var agg = 0;
input.onmouseleave = function () {
    var arr = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (input.value == '') {
        alert('手机号不能为空');
        return false;
    }
    else if (!arr.test(input.value)) {
        alert('手机号码输入有误')
        return false;
    } else {
        agg++;
        fu(agg)
        return true;
    }
}
input1.onmouseleave = function () {
    var arr1 = /^\w{8,12}$/;
    if (!arr1.test(input1.value)) {
        alert('请输入8-12位有效密码');
        return false;
    } else {
        agg++;
        fu(agg)
        return true;
    }
}
function fu(a) {

    // regis.removeAttribute('disabled');
    console.log(a);
    registerBtn.onclick = function () {
        if (a >= 2) {

            location.href = '#'
        } else {
            agg--;
            alert('输入错误')

        }
    }

}

var input3 = document.getElementsByTagName('input')[3];
var input4 = document.getElementsByTagName('input')[4];
var registerBtn1 = document.getElementsByClassName('registerBtn')[1];
var code = document.getElementById('code');
var abc = 0;

var num = 0;
var timer = null;
code.onclick = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (input3.value == '') {
        // console.log(input_.value);
        alert('手机号不能为空');
        return false;

    } else if (!reg.test(input3.value)) {
        alert('手机号码输入有误')
        return false;

    } else {
        abc++;
        fu(abc)
        var num1 = 60;
        timer = setInterval(function () {
            num1--;
            code.innerHTML = num1 + 's';

            if (num1 == 57) {
                num = Math.floor(Math.random() * 1000000);
                alert('你的验证码为：' + num);
                clearInterval(timer);
                code.innerHTML = '重获验证码';
            } else {
                code.innerHTML = num1 + '重获验证码';
                abc++;
                fu(abc)
            }
        }, 1000)
        return true;
    }
}

input4.onclick = function () {
    if (input4.value != num) {
        alert('验证码输入有误')
    } else {
        abc++;
        fu(abc)
    }
}
// function fu(a) {

//     // regis.removeAttribute('disabled');
//     console.log(a);
//     registerBtn1.onclick = function () {
//         if (a >= 3) {
//             alert('注册成功')
//             location.href = '#'
//         } else {
//             abc--;
//             alert('输入错误')

//         }
//     }

// }
 registerBtn1.onclick=function(){
     if(input3.value==''&&input4.value==''){
       alert('输入内容不能为空')
       return false;
     }
 }

