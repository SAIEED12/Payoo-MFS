// machine id --> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine --> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance", Number(balance));
    return Number(balance);
}

// machine --> set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine  id --> hide all > show id
function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money")
    const getBonus = document.getElementById("get-bonus");
    const billPayment = document.getElementById("pay-bill");
    const history = document.getElementById("history");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden")
    getBonus.classList.add("hidden");
    billPayment.classList.add("hidden")
    history.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}