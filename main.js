// prompt user for login
let loginRequest = prompt("Who is there?");

//enters admin prompt for password
if(loginRequest === "Admin".toUpperCase()) {
    let password = prompt("password?");

    // if equals the master show "Welcome!"
    if (password === "Themaster") {
        alert("welcome!");
    
    // if canceled or esc return canceled
    } else if (password === null) {
        alert("canceled");

    } else {
        alert("wrong password");
    }

    alert("Welcome!");

//If canceled / escape show canceled
} else if (loginRequest === null) {
    alert("canceled");  
    
// if another string show i don't know you
} else { 
    alert ("I don't know you");
}

