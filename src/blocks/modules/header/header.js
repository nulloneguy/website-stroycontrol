// menu burger
document.querySelector(".menu__burger").addEventListener("click", function () {
    document.querySelector(".menu__burger").classList.toggle("active");
    document.querySelector(".menu__list").classList.toggle("active");
    document.body.classList.toggle("_modal-is-open");
});
