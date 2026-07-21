function adminLogin(){

    let username = document.getElementById("adminUser").value;
    let password = document.getElementById("adminPass").value;

    // Demo Admin Login
    if(username === "lrgujjar26" && password === "lekhi0007"){

        document.getElementById("msg").innerHTML =
        "Login Successful";

        setTimeout(function(){
            window.location.href = "admin-dashboard.html";
        },1000);

    }else{

        document.getElementById("msg").innerHTML =
        "Wrong Username or Password";
    }
}