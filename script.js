function learnMore() {
    alert("Welcome to Global Marketing! We help businesses grow worldwide.");
}

let clients = 0;
let countries = 0;
let campaigns = 0;

let interval = setInterval(() => {

    if (clients < 500) {
        clients += 5;
        document.getElementById("clients").innerHTML = clients + "+";
    }

    if (countries < 50) {
        countries += 1;
        document.getElementById("countries").innerHTML = countries + "+";
    }

    if (campaigns < 1200) {
        campaigns += 20;
        document.getElementById("campaigns").innerHTML = campaigns + "+";
    }

    if (clients >= 500 && countries >= 50 && campaigns >= 1200) {
        clearInterval(interval);
    }

}, 50);

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been submitted successfully.");

this.reset();

});