let movie = JSON.parse(
    localStorage.getItem("selectedMovie")
);



let videoPlayer = document.getElementById("videoPlayer");

let playerBox = document.getElementById("playerBox");




if(movie){



    document.getElementById("moviePoster").src =
    movie.poster || "";



    document.getElementById("movieName").innerHTML =
    movie.name || "Movie";



    document.getElementById("movieCategory").innerHTML =
    "🎭 Category: " + (movie.category || "");



    document.getElementById("movieYear").innerHTML =
    "📅 Year: " + (movie.year || "");



    document.getElementById("movieDescription").innerHTML =
    movie.description || "";



}

else{


    document.querySelector(".details-box").innerHTML = `

    <h2>
    Movie Not Found
    </h2>

    `;


}




window.watchNow = function(){


    if(movie.video && movie.video !== ""){


        playerBox.style.display = "block";


        videoPlayer.src = movie.video;


        videoPlayer.play();


    }

    else{


        alert(
        "Video Not Available"
        );


    }


}





window.changeQuality = function(quality){


    alert(
        quality + " Quality Selected"
    );


}