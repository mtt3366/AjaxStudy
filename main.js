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

                //*核心代码 */
                //第一部分:
                console.log("获取响应第一部分:")
                console.log(request.status)//200
                console.log(request.statusText)//ok

                //第二部分:
                console.log("获取响应第二部分:")
                console.log(request.getResponseHeader('Content-Type'))
                console.log(request.getAllResponseHeaders())

                //第四部分:
                console.log("获取响应第四部分:")
                console.log(request.responseText)
                 //*核心代码 */


                let string = request.responseText;
                //把符合json语法的字符串转化为js对应的值
                let object2 = window.JSON.parse(string);
                // console.log(object2)

            }else if(request.status>=400){
                console.log("响应失败");
            }
        } 
    }
})