// step 1 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // step 2 
    const withdrawInputElement = document.getElementById('withdraw-nput');
    const withdrawInputAmountString = withdrawInputElement.value;
    const withdrawInputAmount = parseFloat(withdrawInputAmountString);

    // step 3 
    withdrawInputElement.value = '';

    // step 4 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const PreviousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5 
    const currentWithdrawTotal = PreviousWithdrawTotal + withdrawInputAmount;

    // step 6 
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 7 
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 8 
    const currentBalanceTotal = previousBalanceTotal - withdrawInputAmount;
    previousBalanceElement.innerText = currentBalanceTotal;
})