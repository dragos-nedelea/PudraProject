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

function cod1() {
    document.getElementById("cod").value = "00019";

}
function cod2() {
    document.getElementById("cod").value = "00020";

}
function cod3() {
    document.getElementById("cod").value = "00021";

}



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
function cod4() {
    document.getElementById("cod").value = "00001";

}
function cod5() {
    document.getElementById("cod").value = "00002";

}
function cod6() {
    document.getElementById("cod").value = "00003";

}
function cod7() {
    document.getElementById("cod").value = "00004";

}
function cod8() {
    document.getElementById("cod").value = "00005";

}
function cod9() {
    document.getElementById("cod").value = "00006";

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
function cod10() {
    document.getElementById("cod").value = "00007";

}
function cod11() {
    document.getElementById("cod").value = "00008";

}
function cod12() {
    document.getElementById("cod").value = "00009";

}
function cod13() {
    document.getElementById("cod").value = "00010";

}
function cod14() {
    document.getElementById("cod").value = "00011";

}
function cod15() {
    document.getElementById("cod").value = "00012";

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
function cod16() {
    document.getElementById("cod").value = "00013";

}
function cod17() {
    document.getElementById("cod").value = "00014";

}
function cod18() {
    document.getElementById("cod").value = "00015";

}
function cod19() {
    document.getElementById("cod").value = "00016";

}
function cod20() {
    document.getElementById("cod").value = "00017";

}
function cod21() {
    document.getElementById("cod").value = "00018";

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
function cod22() {
    document.getElementById("cod").value = "00022";

}
function cod23() {
    document.getElementById("cod").value = "00023";

}
function cod24() {
    document.getElementById("cod").value = "00024";

}
function cod25() {
    document.getElementById("cod").value = "00025";

}
function cod26() {
    document.getElementById("cod").value = "00026";

}
function cod27() {
    document.getElementById("cod").value = "00027";

}

var form = document.getElementById("formular");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("formular")),
    }).then(() =>{
        alert("Multumesc!");
        form.reset();
    });
});