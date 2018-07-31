let myButton = document.getElementById('myButton');
myButton.addEventListener("click",(e)=>{
    let request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{//把监听函数往上写,这样就不会错过每一个readyState的变化
        console.log(request.readyState);
    }
    request.open('GET','/xxx')//配置request.参数分别为方法和路径
    request.send();//发送请求
    // console.log(request)
})