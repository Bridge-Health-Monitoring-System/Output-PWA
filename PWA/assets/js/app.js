window.onload=function(){
    render();
};
function render(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha_container');
    recaptchaVerifier.render();
}

function phoneAuth() {
    var phoneNumber = document.getElementById("number_field").value;
    firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier).then(function(confirmationResult){
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        alert("OTP Sent");
    }).catch(function(error){
        alert(error.message);
    });
}

function codeVerify() {
    var otpcode = document.getElementById("otp_field").value;
    coderesult.confirm(otpcode).then(function (result){
        window.location.href="https://rtbhms-iot.firebaseapp.com/home.html";
        var user = result.user;
    }).catch(function(error){
        alert(error.message);
    });
}

firebase.auth().onAuthStateChanged( user => {
    if(user)
    {
        window.location.href="https://rtbhms-iot.firebaseapp.com/home.html";
    }
    else
    {
        window.location.href="https://rtbhms-iot.firebaseapp.com/index.html";
    }
});