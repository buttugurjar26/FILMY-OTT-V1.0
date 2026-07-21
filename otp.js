document.getElementById("verifyBtn").addEventListener("click", function () {

    let otpInputs = document.querySelectorAll(".otp-input input");
    let otp = "";

    otpInputs.forEach(function(input){
        otp += input.value;
    });

    if(otp.length != 6){
        alert("Please Enter 6 Digit OTP");
        return;
    }

    alert("Login Successful");

    window.location.href="home.html";

});