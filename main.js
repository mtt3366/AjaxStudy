let myButton = document.getElementById('myButton');
myButton.addEventListener("click",(e)=>{
    let request = new XMLHttpRequest();
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
    request.open('GET','http://jack.com:8002/xxx')//配置request.请求的路径为第二个网站的8002端口
    request.send();//发送请求
})