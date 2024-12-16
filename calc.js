function ac()
{
    document.getElementById("res").value="";
}
function show(Input)
{
    document.getElementById("res").value += Input;
} 
function call()
{
    var output=eval((document.getElementById("res").value));
    document.getElementById("res").value=output;
}