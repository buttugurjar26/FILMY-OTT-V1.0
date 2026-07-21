import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


let container = document.getElementById("moviesContainer");


let movies = [];


async function showMovies(){

    container.innerHTML = "";


    try {

        const querySnapshot = await getDocs(
            collection(db, "movies")
        );


        movies = [];


        querySnapshot.forEach((item)=>{

            movies.push({
                id: item.id,
                ...item.data()
            });

        });



        if(movies.length === 0){

            container.innerHTML = "<h3>No Movies Added</h3>";
            return;

        }



        movies.forEach(function(movie){


            container.innerHTML += `

            <div class="movie-card">


                <img src="${movie.poster}">


                <h3>${movie.name}</h3>


                <p>${movie.category}</p>


                <p>${movie.year}</p>



                <button class="delete-btn" onclick="deleteMovie('${movie.id}')">

                Delete

                </button>


            </div>

            `;


        });


    }
    catch(error){

        console.log(error);

    }


}




window.deleteMovie = async function(id){


    try{


        await deleteDoc(
            doc(db,"movies",id)
        );


        showMovies();


    }
    catch(error){

        console.log(error);

    }


}




window.goBack = function(){

    window.location.href="admin-dashboard.html";

}



showMovies();