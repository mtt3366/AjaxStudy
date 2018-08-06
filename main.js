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
    ).then(()=>{
        console.log("成功")
        console.log(responseText);
    },()=>{
        console.log("失败")
        console.log(request);
    })//$.ajax()返回一个promise
})