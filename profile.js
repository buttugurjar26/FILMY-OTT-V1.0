let mobile = localStorage.getItem("mobileNumber");



let mobileBox = document.getElementById("mobileNumber");



if(mobile){


    mobileBox.innerHTML =
    "📱 Mobile Number : " + mobile;


}

else{


    mobileBox.innerHTML =
    "Please Login First";


}






function logoutUser(){


    localStorage.removeItem("mobileNumber");

    localStorage.removeItem("selectedMovie");

    localStorage.removeItem("selectedSeries");



    window.location.href="login.html";


}