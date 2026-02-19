document.getElementById("cashout-btn").addEventListener('click', function(){
    // 1. Get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }

    // 2. Get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3. Get current balance
    const currentBalance = getBalance();

    // 4. Calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;    
    }


    const pin = getValueFromInput("cashout-pin");
    if(pin === '1234'){
//         // 5-1 true:: show an alert > set Balance
       alert("Cashout successful!")
        setBalance(newBalance);

        // 1. history-container ke dhore anbo
        const history = document.getElementById("history-container");

        // 2. new div create korbo
        const newHistory = document.createElement("div");

        // 3. new div e innerHTML addd korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Cashout TK${cashoutAmount} Success to ${cashoutNumber}, at ${new Date()}
        </div>
        `;

        // 4. history-container e new div append korbo
        history.append(newHistory);
    }
    else{
        // 5-2 false:: show an error alert > return
        alert("Invalid Pin")
        return;
    }
});





// document.getElementById("cashout-btn").addEventListener('click', function(){
//     // 1. Get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length != 11){
//         alert("Invalidd A")
//     }

//     // 2. Get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;

//     // 3. Get current balance, validate, convert to number
//     const balanceElemnt = document.getElementById("balance");
//     const balance = balanceElemnt.innerText;
//     // 4. Calculate new balance
//     const newBalance = Number(balance)-Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     console.log("New Balance:",newBalance)
    
//     // 5. Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//         // 5-1 true:: show an alert > set Balance
//         alert("Cashout successful!")
//         console.log("New Balance:",newBalance);
//         balanceElemnt.innerText = newBalance;
//     }
//     else{
//         // 5-2 false:: show an error alert > return
//         alert("Invalid Pin")
//         return;
//     }
// })


