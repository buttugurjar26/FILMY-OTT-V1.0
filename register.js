import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



window.registerUser = async function(){


    let mobile = document.getElementById("mobile").value;

    let password = document.getElementById("password").value;



    if(mobile.length !== 10 || password === ""){


        document.getElementById("message").innerHTML =
        "Enter valid mobile and password";


        return;

    }



    try{


        // Check existing user

        let q = query(
            collection(db,"users"),
            where("mobile","==",mobile)
        );



        let result = await getDocs(q);



        if(!result.empty){


            document.getElementById("message").innerHTML =
            "Mobile already registered";


            return;

        }




        await addDoc(
            collection(db,"users"),
            {

                mobile: mobile,

                password: password,

                createdAt: new Date()

            }
        );



        document.getElementById("message").innerHTML =
        "Registration Successful ✅";



        setTimeout(()=>{


            window.location.href="login.html";


        },1000);



    }

    catch(error){


        document.getElementById("message").innerHTML =
        error.message;


    }


}