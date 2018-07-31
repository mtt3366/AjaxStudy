let myButton = document.getElementById('myButton');
myButton.addEventListener("click",(e)=>{
    let request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
        if(request.readyState ===4){
            console.log("请求和响应都完毕了");
            if ( request.status>=200&&request.status<=400){
                console.log('说明请求成功');
                console.log(request.responseText);
                console.log( typeof request.responseText);//string

                let string = request.responseText;
                //把符合json语法的字符串转化为js对应的值
                let object2 = window.JSON.parse(string);
                console.log( typeof object2)
                console.log(object2)
            }else if(request.status>=400){
                console.log("响应失败");
            }
        } 
    }
    request.open('GET','/xxx')//配置request.参数分别为方法和路径
    request.send();//发送请求
    // console.log(request)
})