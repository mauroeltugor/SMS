const searchForm = document.getElementById("search-form");
const cardContainers = document.querySelectorAll(".card-container");
const serieDetails = document.getElementById("serie-details");
const serieTitle = document.querySelector(".serie-title");
const serieDescription = document.querySelector(".serie-description");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    let seriesFound = false;

    cardContainers.forEach((container) => {
        const cards = container.querySelectorAll(".card");

        cards.forEach((card) => {
            const cardName = card.getAttribute("data-nombre").toLowerCase();
            const isVisible = cardName.includes(searchTerm);

            if (isVisible) {
                card.style.display = "block";
                const image = card.querySelector("img");
                image.style.display = "block";
                image.style.objectFit = "cover";

                const title = image.alt;
                const description = card.getAttribute("data-descripcion"); // Obtener la descripción de la tarjeta

                serieTitle.textContent = title;
                serieDescription.textContent = description;
                serieDetails.style.display = "block";

                const cardRect = card.getBoundingClientRect();
                serieDetails.style.top = cardRect.top + "px";
                serieDetails.style.left = cardRect.right + 20 + "px";

                seriesFound = true;
            } else {
                card.style.display = "none";
            }
        });
    });

    if (!seriesFound) {
        serieDetails.style.display = "none";
    }
});

document.getElementById("search-input").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    if (searchTerm.trim() === "") {
        cardContainers.forEach((container) => {
            const cards = container.querySelectorAll(".card");
            cards.forEach((card) => {
                card.style.display = "block";
            });
        });
        serieDetails.style.display = "none";
    }
});







