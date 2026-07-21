import { db } from "./firebase.js";

import {
    collection,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



window.loginUser = async function(){


    let mobile = document.getElementById("mobile").value;

    let password = document.getElementById("password").value;



    if(mobile.length !== 10 || password === ""){


        document.getElementById("message").innerHTML =
        "Enter valid mobile and password";


        return;

    }




    try{


        let q = query(

            collection(db,"users"),

            where("mobile","==",mobile),

            where("password","==",password)

        );



        let result = await getDocs(q);



        if(result.empty){


            document.getElementById("message").innerHTML =
            "Invalid Mobile or Password";


            return;

        }




        let userData = result.docs[0].data();



        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );



        document.getElementById("message").innerHTML =
        "Login Successful ✅";



        setTimeout(()=>{


            window.location.href="index.html";


        },1000);



    }


    catch(error){


        document.getElementById("message").innerHTML =
        error.message;


    }


}