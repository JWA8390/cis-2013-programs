var $ = function (id)
{
    return document.getElementById(id);
}

var generate = function ()
{
   var intCount, i, j, k , stringOutput

   i=0;
   j=1;
   stringOutput = i + " " + j;

   intCount = parseInt($("total_fib").value);
   //validate that intCount is a number

   if (isNaN(intCount)||intCount<1||intCount>100)
   {
       $("total_fib").value = "";
       alert ("You must enter a number between 1 and 100");
   }
   else
   {
       while (intCount > 2)
       {
           k=i+j;
           i=j;
           j=k;
           intCount--;
           stringOutput = stringOutput + " " + k;
       }
       $("output").value = stringOutput;
   }
}




window.onload = function ()
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate;
}