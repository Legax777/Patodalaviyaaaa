document.addEventListener("DOMContentLoaded", () => {
    const pato1 = document.getElementById("pato1");
    const pato2 = document.getElementById("pato2");

    setTimeout(() => {
        pato1.style.left = "40%";
        pato2.style.right = "40%";
    }, 1000);
});
