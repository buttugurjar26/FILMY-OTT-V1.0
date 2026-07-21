import { db } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



window.saveSeries = async function(){



    let seriesName = document.getElementById("seriesName").value;

    let seriesPoster = document.getElementById("seriesPoster").value;

    let seriesCategory = document.getElementById("seriesCategory").value;

    let seriesYear = document.getElementById("seriesYear").value;

    let seriesDesc = document.getElementById("seriesDesc").value;

    let seriesVideo = document.getElementById("seriesVideo").value;





    if(seriesName === "" || seriesPoster === ""){


        document.getElementById("message").innerHTML =
        "Please fill Series Name and Poster";


        return;

    }




    try{


        await addDoc(

            collection(db,"webseries"),

            {


                name: seriesName,


                poster: seriesPoster,


                category: seriesCategory,


                year: seriesYear,


                description: seriesDesc,


                video: seriesVideo


            }

        );




        document.getElementById("message").innerHTML =
        "Web Series Added Successfully 📺";




        setTimeout(()=>{


            window.location.href="admin-dashboard.html";


        },1000);



    }


    catch(error){


        document.getElementById("message").innerHTML =
        "Error : " + error.message;


    }


}