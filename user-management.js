import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


let container = document.getElementById("usersContainer");



async function loadUsers(){


    container.innerHTML = "Loading Users...";


    try{


        const snapshot = await getDocs(
            collection(db,"users")
        );



        container.innerHTML = "";



        if(snapshot.empty){


            container.innerHTML =
            "<h3>No Users Found</h3>";

            return;

        }




        snapshot.forEach((user)=>{


            let data = user.data();



            container.innerHTML += `


            <div class="movie-card">


                <h3>👤 User</h3>


                <p>
                Mobile: ${data.mobile}
                </p>


                <p>
                Created: ${data.createdAt?.toDate ? data.createdAt.toDate() : ""}
                </p>



                <button class="delete-btn"
                onclick="deleteUser('${user.id}')">

                Delete

                </button>


            </div>


            `;



        });



    }

    catch(error){


        container.innerHTML =
        error.message;


    }


}




window.deleteUser = async function(id){


    try{


        await deleteDoc(
            doc(db,"users",id)
        );


        loadUsers();


    }

    catch(error){


        console.log(error);


    }


}





window.goBack = function(){


    window.location.href="admin-dashboard.html";


}





loadUsers();