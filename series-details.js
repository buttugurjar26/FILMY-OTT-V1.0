let series = JSON.parse(
    localStorage.getItem("selectedSeries")
);



let videoPlayer = document.getElementById("videoPlayer");

let playerBox = document.getElementById("playerBox");




if(series){


    document.getElementById("seriesPoster").src =
    series.poster || "";



    document.getElementById("seriesName").innerHTML =
    series.name || "Web Series";



    document.getElementById("seriesCategory").innerHTML =
    "🎭 Category: " + (series.category || "");



    document.getElementById("seriesYear").innerHTML =
    "📅 Year: " + (series.year || "");



    document.getElementById("seriesDescription").innerHTML =
    series.description || "";



}

else{


    document.querySelector(".details-box").innerHTML = `

    <h2>
    Series Not Found
    </h2>

    `;


}




window.watchSeries = function(){


    if(series.video && series.video !== ""){


        playerBox.style.display = "block";


        videoPlayer.src = series.video;


        videoPlayer.play();


    }

    else{


        alert(
        "Video Not Available"
        );


    }


}