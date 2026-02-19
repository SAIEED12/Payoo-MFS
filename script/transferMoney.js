document.getElementById("send-btn").addEventListener("click", function () {
    const userAccNo = getValueFromInput("user-account-number");
    if(userAccNo.length != 11){
        alert("Invalid Account!");
        return;
    }

    // Get amount
    const amount = getValueFromInput("transfer-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amount);
    if(newBalance < 0){
        alert("Invalid Amount!");
        return;
    }

    // validate pin
    const pin = getValueFromInput("transfer-pin");
    if(pin === '1234'){
        alert(`TK ${amount} Transfer Successfull to ${userAccNo} at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
         newHistory.innerHTML = 
        `<div class="transaction-card p-5 bg-base-100">
          Transferred TK${amount} to ${userAccNo}, at ${new Date()}
        </div>
        `;

        history.append(newHistory);
    }
    else
    {
        alert("Invalid pin!");
        return;
    }

});
