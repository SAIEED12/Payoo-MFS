document.getElementById("pay-btn").addEventListener('click', function(){
    const bill = getValueFromInput("select-bill");
    if(bill === 'Select Bill'){
        alert("Please Select A Bill To Pay!");
        return;
    }

    const billerAccNo = getValueFromInput('biller-account-number');
    if(billerAccNo.length != 11){
        alert("Invalid Account!")
        return;
    }

    const billAmount = getValueFromInput("bill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(billAmount);
    if(newBalance < 0){
        alert("Invalid Amount!")
        return;
    }
    setBalance(newBalance);

    const pin = getValueFromInput("bill-pin");
    if(pin === '1234'){
        alert(`Tk${billAmount} ${bill} Payment Successfull to ${billerAccNo}, at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Paid Tk ${billAmount} ${bill} to ${billerAccNo}, at ${new Date()}
        </div>
        `;

        // 4. history-container e new div append korbo
        history.append(newHistory);
    }
    else{
        alert("Invalid Pin!")
        return;
    }
});