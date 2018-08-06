let myButton = document.getElementById('myButton');

window.jQuery = ()=>{//假装有一个简易的jQuery
    let object1 = {};
    boject1.addClass = function(){};
    boject1.show = function(){};
    return object1;
}

window.jQuery.ajax = ({method,path,body,successFn,failFn,headers})=>{//ES6语法
    
    let request = new XMLHttpRequest();
    request.open(method,path);//配置

    for (const key in headers) {//遍历header,设置响应头
        let value = headers[key];
        request.setRequestHeader(key,value);
    }
    request.send(body);//发送,并配置响应体

    request.onreadystatechange = ()=>{
        if(request.readyState ===4){
            if ( request.status>=200&&request.status<=400){
                successFn.call(undefined,request.responseText);//执行成功函数
            }else if(request.status>=400){
                failFn.call(undefined,request);//执行失败函数
            }
        }
    }
}

window.$ = window.jQuery;
myButton.addEventListener("click",(e)=>{
    //使用ajax
    $.ajax({
        method:"post",
        path:"/xxx",
        body:"username=mtt&password=1",
        headers:{
            "content-type":'application/x-www-form-urlencoded',
            "mataotao":18
        },
        successFn:function(result){//成功函数的回调
            console.log('成功了,返回的响应体为:');
            console.log(result);//打印request.responseTex
        },
        failFn:function(){
            console.log(result);
            console.log(result.status);//打印失败的状态码
            console.log(result.responseText);//打印失败时返回的响应体
        }
    }
)
})