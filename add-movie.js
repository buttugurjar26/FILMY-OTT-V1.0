import { db } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



window.saveMovie = async function(){



    let movieName = document.getElementById("movieName").value;

    let moviePoster = document.getElementById("moviePoster").value;

    let movieCategory = document.getElementById("movieCategory").value;

    let movieYear = document.getElementById("movieYear").value;

    let movieDesc = document.getElementById("movieDesc").value;

    let movieVideo = document.getElementById("movieVideo").value;




    if(movieName === "" || moviePoster === ""){


        document.getElementById("message").innerHTML =
        "Please fill Movie Name and Poster";


        return;

    }




    try{


        await addDoc(
            collection(db,"movies"),
            {


                name: movieName,


                poster: moviePoster,


                category: movieCategory,


                year: movieYear,


                description: movieDesc,


                video: movieVideo


            }
        );




        document.getElementById("message").innerHTML =
        "Movie Added Successfully 🎬";




        setTimeout(()=>{


            window.location.href="movies-list.html";


        },1000);



    }


    catch(error){


        document.getElementById("message").innerHTML =
        "Error : " + error.message;


    }


}