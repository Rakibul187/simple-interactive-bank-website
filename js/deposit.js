/* 
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
3. clear the deposit field after get the deposit input
4. get the previous total deposit value
*/
// step 1 
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 
    depositField.value = '';

    // step 4 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);

    // step 5 
    const currentTotalDeposit = newDepositAmount + depositTotal;
    depositTotalElement.innerText = currentTotalDeposit;

    // step 6 
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    previousBalanceElement.innerText = currentBalanceTotal;


})