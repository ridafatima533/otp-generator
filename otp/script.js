function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otp-display").innerHTML = "Your OTP is: " + otp;
}