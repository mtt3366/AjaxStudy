let myButton = document.getElementById('myButton');

window.jQuery = ()=>{//假装有一个简易的jQuery,具体封装
    let object1;
    boject1.addClass = function(){};
    boject1.show = function(){};
    return object1;
}

window.jQuery.ajax = (method,path,body,successFn,failFn)=>{
    let request = new XMLHttpRequest();
    request.open(method,path)
    request.send(body);
    request.onreadystatechange = ()=>{
        if(request.readyState ===4){
            if ( request.status>=200&&request.status<=400){
                successFn.call(undefined,request.responseText)//执行成功函数
            }else if(request.status>=400){
                failFn.call(undefined,request)//执行失败函数
            }
        }
    }
}

window.$ = window.jQuery;
myButton.addEventListener("click",(e)=>{
    //使用ajax
    $.ajax("post",
           "/xxx",
           "username=mtt&password=1",
           function(result){
                console.log('成功了,返回的响应体为:')
                console.log(result);//打印request.responseText
           },
           function(result){
                console.log(result);
                console.log(result.status);//打印失败的状态码
                console.log(result.responseText);//打印失败时返回的响应体
                
           }
)
})