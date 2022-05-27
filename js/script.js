const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay-toggle');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
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

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("formular")),
        }).then(() => {
            alert("Multumesc!");
            form.reset();
        });
    });
}


/*--------- gotopbtn function ---------------------------------------------------------------------------------------------------------------------------------- */
const showOnPx = 100;
const backToTopButton = document.querySelector(".gotopbtn")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};
backToTopButton.addEventListener("click", goToTop)


/*---------  ---------------------------------------------------------------------------------------------------------------------------------- */
