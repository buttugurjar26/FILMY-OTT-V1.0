import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



let movieList = document.getElementById("movieList");

let seriesList = document.getElementById("seriesList");

let latestMovies = document.getElementById("latestMovies");

let searchBox = document.getElementById("searchBox");



let movies = [];

let seriesData = [];





async function loadMovies(){


    if(!movieList){
        return;
    }



    try{


        const snapshot = await getDocs(
            collection(db,"movies")
        );



        movies = [];



        snapshot.forEach((item)=>{


            movies.push({

                id:item.id,

                ...item.data()

            });


        });



        showMovies(movies);



        if(latestMovies){

            showMovies(movies, latestMovies);

        }



    }


    catch(error){

        console.log(error);

    }


}






function showMovies(data, container = movieList){


    if(!container){
        return;
    }



    container.innerHTML="";



    if(data.length === 0){


        container.innerHTML = `

        <h2 style="width:100%;text-align:center;color:#7A5200;">
        🎬 No Movies Found
        </h2>

        `;


        return;

    }




    data.forEach((movie,index)=>{


        container.innerHTML += `


        <div class="movie-card">


        <img src="${movie.poster}">



        <h3>
        ${movie.name}
        </h3>



        <p>
        ${movie.category || ""}
        </p>



        <p>
        ${movie.year || ""}
        </p>



        <button onclick="watchMovie(${index})">

        ▶ Watch Now

        </button>



        </div>


        `;


    });


}








async function loadSeries(){


    if(!seriesList){

        return;

    }



    try{


        const snapshot = await getDocs(
            collection(db,"webseries")
        );



        seriesData=[];



        snapshot.forEach((item)=>{


            seriesData.push({

                id:item.id,

                ...item.data()

            });


        });



        showSeries(seriesData);



    }


    catch(error){

        console.log(error);

    }


}







function showSeries(data){



    if(!seriesList){

        return;

    }



    seriesList.innerHTML="";



    if(data.length===0){


        seriesList.innerHTML=`

        <h2 style="width:100%;text-align:center;color:#7A5200;">
        📺 No Series Found
        </h2>

        `;


        return;

    }





    data.forEach((series)=>{


        seriesList.innerHTML += `


        <div class="movie-card">


        <img src="${series.poster}">



        <h3>
        ${series.name}
        </h3>



        <p>
        ${series.category || ""}
        </p>



        <p>
        ${series.year || ""}
        </p>



        <button onclick='watchSeries(${JSON.stringify(series)})'>

        ▶ Watch Now

        </button>



        </div>


        `;


    });


}









window.watchMovie=function(index){


    localStorage.setItem(
        "selectedMovie",
        JSON.stringify(movies[index])
    );


    window.location.href="movie-details.html";


}







window.watchSeries=function(series){


    localStorage.setItem(
        "selectedSeries",
        JSON.stringify(series)
    );


    window.location.href="series-details.html";


}








window.searchContent=function(){



    let text = searchBox.value.toLowerCase();



    let filteredMovies = movies.filter(movie=>


        movie.name.toLowerCase().includes(text) ||

        (movie.category || "").toLowerCase().includes(text)


    );




    let filteredSeries = seriesData.filter(series=>


        series.name.toLowerCase().includes(text) ||

        (series.category || "").toLowerCase().includes(text)


    );



    showMovies(filteredMovies);


    showSeries(filteredSeries);


}







loadMovies();

loadSeries();

window.goHome = function(){

    window.location.href="home.html";

}



window.goMovies = function(){

    window.location.href="home.html";

}



window.goSeries = function(){

    window.location.href="home.html#seriesList";

}



window.goProfile = function(){

    window.location.href="profile.html";

}