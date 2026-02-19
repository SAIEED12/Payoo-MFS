document.getElementById("add-money-btn").addEventListener('click', function(){
    // 1. Get Bank Account
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount === 'Select a bank'){
        alert("Please Select A Bank!");
        return;
    }
    // 2. Get Bank Account Number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid Account Number!");
        return;
    }

    // 3. Get Amount
    const amount = getValueFromInput("add-money-amount")
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    const pin = getValueFromInput("add-money-pin");
    if(pin === '1234'){
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        // 1. history-container ke dhore anbo
        const history = document.getElementById("history-container");

        // 2. new div create korbo
        const newHistory = document.createElement("div");

        // 3. new div e innerHTML addd korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Add Money Success from ${bankAccount}, account-number ${accno} at ${new Date()}
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