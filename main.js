let myButton = document.getElementById('myButton');
myButton.addEventListener("click",(e)=>{
    let request = new XMLHttpRequest();
    request.open('GET','/xxx')//配置request.参数分别为方法和路径
    request.send();//发送请求
    // console.log(request)
    setInterval(()=>{//在发送请求的过程中,每一毫秒问一下
        console.log(request.readyState);
    },1)
})