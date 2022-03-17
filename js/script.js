function show1() {
    let formular = document.getElementById("form1");
    if (formular.style.display === "") {
        formular.style.display = "block";
    } else if (formular.style.display === "none") {
        formular.style.display = "block";
    } else {
        formular.style.display = "none";

    }
}
function togglePopup1() {
    let formular = document.getElementById("form1");
    if (formular.style.display === "block") {
    } formular.style.display = "none";
}

var form = document.getElementById("formular");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("formular")),
    }).then(() =>{
        alert("Multumesc !");
        form.reset();
    });
});



function show2() {
    let formular = document.getElementById("form2");
    if (formular.style.display === "") {
        formular.style.display = "block";
    } else if (formular.style.display === "none") {
        formular.style.display = "block";
    } else {
        formular.style.display = "none";

    }
}
function togglePopup2() {
    let formular = document.getElementById("form2");
    if (formular.style.display === "block") {
    } formular.style.display = "none";
}



function show3() {
    let formular = document.getElementById("form3");
    if (formular.style.display === "") {
        formular.style.display = "block";
    } else if (formular.style.display === "none") {
        formular.style.display = "block";
    } else {
        formular.style.display = "none";

    }
}
function togglePopup3() {
    let formular = document.getElementById("form3");
    if (formular.style.display === "block") {
    } formular.style.display = "none";
}



function show4() {
    let formular = document.getElementById("form4");
    if (formular.style.display === "") {
        formular.style.display = "block";
    } else if (formular.style.display === "none") {
        formular.style.display = "block";
    } else {
        formular.style.display = "none";

    }
}
function togglePopup4() {
    let formular = document.getElementById("form4");
    if (formular.style.display === "block") {
    } formular.style.display = "none";
}



function show5() {
    let formular = document.getElementById("form5");
    if (formular.style.display === "") {
        formular.style.display = "block";
    } else if (formular.style.display === "none") {
        formular.style.display = "block";
    } else {
        formular.style.display = "none";

    }
}
function togglePopup5() {
    let formular = document.getElementById("form5");
    if (formular.style.display === "block") {
    } formular.style.display = "none";
}
