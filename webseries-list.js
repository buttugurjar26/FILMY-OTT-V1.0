import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


let container = document.getElementById("seriesContainer");


let series = [];


async function showSeries(){


    container.innerHTML = "";


    try{


        const querySnapshot = await getDocs(
            collection(db,"webseries")
        );


        series = [];


        querySnapshot.forEach((item)=>{


            series.push({

                id: item.id,
                ...item.data()

            });


        });



        if(series.length === 0){


            container.innerHTML =
            "<h3>No Web Series Added</h3>";

            return;

        }



        series.forEach(function(item){


            container.innerHTML += `


            <div class="movie-card">


                <img src="${item.poster}">


                <h3>${item.name}</h3>


                <p>${item.category}</p>


                <p>${item.year}</p>



                <button class="delete-btn" onclick="deleteSeries('${item.id}')">

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




window.deleteSeries = async function(id){


    try{


        await deleteDoc(
            doc(db,"webseries",id)
        );


        showSeries();


    }
    catch(error){

        console.log(error);

    }


}




window.goBack = function(){


    window.location.href="admin-dashboard.html";


}



showSeries();