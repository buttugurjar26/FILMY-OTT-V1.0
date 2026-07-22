function adminLogin(){

    let username = document.getElementById("adminUser").value.trim();

    let password = document.getElementById("adminPass").value.trim();

    if(username === "lrgujjar26" && password === "lekhi0007"){

        // Admin Login Status Save
        localStorage.setItem(
            "adminLogin",
            "true"
        );

        document.getElementById("msg").innerHTML =
        "Login Successful ✅";

        setTimeout(function(){

            window.location.href =
            "admin-dashboard.html";

        },1000);

    }
    else{

        document.getElementById("msg").innerHTML =
        "Wrong Username or Password";

    }

}