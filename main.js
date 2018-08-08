let myButton = document.getElementById('myButton');

function success(responseText){
    console.log("成功")
    console.log(responseText);//responseTex
}
function fail(request){
    console.log("失败")
    console.log(request);
}
myButton.addEventListener("click",(e)=>{
    //使用ajax
    $.ajax({
        method:"post",
        url:"/xxx",
        data:"username=mtt&password=1",
        dataType:'json'//预期服务器返回的数据类型,如果不写,就是响应里设置的
    }
    ).then((responseText)=>{
        console.log(responseText)
        return responseText;//如果要对结果进行多次处理,就在这里return,第二次then就会得到这个return的数据
    },()=>{
        console.log("失败")
    }).then(//开始第二次then
        (上一次return的结果)=>{
            console.log("第二次处理")
            console.log(上一次return的结果)
        },
        ()=>{
            //第二次处理失败结果
        }
    )
})