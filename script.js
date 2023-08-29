"use strict";

// select all the element with same class     document.querySelectorAll(".show-modal")
// loop each element (FOREACH) to addEventListener on clicking
// then select all item with HIDDEN class and add event listener to remove their class
// WE CAN REMOVE ONE BY ONE ALSO IN ANOTHER WAY
document.querySelectorAll(".show-modal").forEach((i) => {
    i.addEventListener("click", function () {
        const hiddenel = document.querySelectorAll(".hidden");

        hiddenel.forEach((hidden) => {
            hidden.classList.remove("hidden");
        });
    });
});

// close modal
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
document.querySelector(".close-modal").addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// close the modal with escape key on keyboard
document.addEventListener("keydown", function (e) {
    if (e.key == "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
