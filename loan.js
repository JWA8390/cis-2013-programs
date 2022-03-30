var $ = function (id) 
{
    return document.getElementById(id);
}
var floatMonthlyPayment, floatTotalCost, intLoanTerm

/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
    var floatMonthlyPayment, intLoanTerm, floatTotalCost;
    floatMonthlyPayment = parseFloat($("monthly_payment").value);
    intLoanTerm = parseInt($("loan_length").value);
    floatTotalCost = parseFloat(floatTotalCost * intLoanTerm);
 }
 $("total_cost").value = floatTotalCost;
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}
