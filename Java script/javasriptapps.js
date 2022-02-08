function add()
{
    var a=parseInt(document.getElementById("num1").value)
    var b=parseInt(document.getElementById("num2").value)
    var c=a+b
    document.getElementById("result").value=c
    alert(c)
}
    function mul()
    {
        var d=parseInt(document.getElementById("num1").value)
        var e=parseInt(document.getElementById("num2").value)
        var f=d*e
        document.getElementById("result").value=f
        alert(f)
    }
    function clear()
    {
        parseInt(document.getElementById("num1").value)=" "
     parseInt(document.getElementById("num2").value)=" "
}