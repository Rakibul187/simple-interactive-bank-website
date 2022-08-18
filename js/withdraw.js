document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInputElement = document.getElementById('withdraw-nput');
    const withdrawInputAmountString = withdrawInputElement.value;
    const withdrawInputAmount = parseFloat(withdrawInputAmountString);

    withdrawInputElement.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const PreviousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = PreviousWithdrawTotal + withdrawInputAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentBalanceTotal = previousBalanceTotal - withdrawInputAmount;
    previousBalanceElement.innerText = currentBalanceTotal;
})