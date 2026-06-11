// prompt user for login
let loginRequest = prompt("Who is there?");

//enters admin prompt for password
if(loginRequest === "Admin".toUpperCase()) {
    let password = prompt("password?");

    // if equals the master show "Welcome!"
    if (password === "Themaster") {
        alert("welcome!");
    
    // if canceled or esc return canceled
    }elseif(password === null) {
        alert("canceled");
    }else {
        alert("wrong password");
    }

//If canceled / escape show canceled
}elseif(loginRequest === null){
    alert("canceled");  
    
// if another string show i don't know you
}else{ 
    alert ("I don't know you")
}

