// For navbar responsiveness
function responsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// for form submission at contact us page
function submitForm() {
    let name = document.getElementById('name').value;
    if(name === undefined || name === "") {
        alert('Please enter name.');
        return;
    }

    let email = document.getElementById('email').value;
    if(email === undefined || email === "") {
        alert('Please enter email.');
        return;
    }

    let subject = document.getElementById('subject').value;
    if(subject === undefined || subject === "") {
        alert('Please enter subject.');
        return;
    }

    let message = document.getElementById('name').value;
    if(message === undefined || message === "") {
        alert('Please enter message.');
        return;
    }

    alert('Thanks for reaching to us. Your form has been submitted.');
}

// for image gallery in index file

var slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
    displaySlide(slideIndex += n);
}

function activeSlide(n) {
    displaySlide(slideIndex = n);
}

/* Main function */
function displaySlide(n) {
    var i;
    var totalslides = document.getElementsByClassName("slide");

    var totaldots = document.getElementsByClassName("footerdot");

    if (n > totalslides.length) slideIndex = 1;
    if (n < 1) slideIndex = totalslides.length;

    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className = totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}