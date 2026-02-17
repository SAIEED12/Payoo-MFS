document.getElementById('login-btn').addEventListener('click',function(){
    // 1. get the mobile number
    const numberInput = document.getElementById("input-mobile");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // 2. get the pin
    const inputPin = document.getElementById("input-pin")
    const pin = inputPin.value;
    console.log(pin);

    // 3. match pin and mobile number
    if(contactNumber == '01234567890' && pin == '1234'){
        // 3.1 true::>> alert> homepage
        alert("Login Successfull")
        window.location.replace("/home.html") //can not go back if replace is used
        window.location.assign("/home.html") //can go back
    }
    else{
        // 3.1 flase::>> alert> return
        alert("Login Failed!");
        return;
    }
});