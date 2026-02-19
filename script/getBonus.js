document.getElementById("coupon-btn").addEventListener('click', function(){
    const coupon = getValueFromInput("bonus-coupon");
    if(coupon === 'MAS12'){
        alert("Congratulations! You got Tk5000 bonus!")
        const currentBalance = getBalance();
        const newBalance = currentBalance + 5000;
        setBalance(newBalance);
    }
    else{
        alert("Invalid Coupon!");
        return;
    }
});