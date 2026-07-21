function addMovie(){

    window.location.href = "add-movie.html";

}


function moviesList(){

    window.location.href = "movies-list.html";

}


function addSeries(){

    window.location.href = "add-webseries.html";

}


function manageUsers(){

    window.location.href = "user-management.html";

}


function logout(){

    localStorage.removeItem("adminLogin");

    window.location.href = "admin.html";

}