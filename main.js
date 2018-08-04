let myButton = document.getElementById('myButton');
myButton.addEventListener("click",(e)=>{
    let request = new XMLHttpRequest();
    request.open('POST','/xxx')//配置request
    //设置第二部分
    request.setRequestHeader("mataotao","123123xxx")
    request.setRequestHeader('content-type','x-www-form-urlencoded')
    request.send("a=1&b=2");//发送请求

    request.onreadystatechange = ()=>{
        if(request.readyState ===4){
            console.log("请求和响应都完毕了");
            if ( request.status>=200&&request.status<=400){
                console.log('说明请求成功');
                let string = request.responseText;
                //把符合json语法的字符串转化为js对应的值
                let object2 = window.JSON.parse(string);
                console.log(object2)
            }else if(request.status>=400){
                console.log("响应失败");
            }
        } 
    }
})