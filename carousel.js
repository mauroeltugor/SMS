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
                const description = card.getAttribute("data-descripcion");

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

    // Mostrar u ocultar el mensaje y los h2 según si se encontraron series o películas
    const noResultMessage = document.getElementById("txt-no-result");
    const carouselHeadings = document.querySelectorAll(".carousel-category h2");

    if (!seriesFound) {
        noResultMessage.style.display = "block";
        serieDetails.style.display = "none";

        carouselHeadings.forEach((heading) => {
            heading.style.display = "none";
        });
    } else {
        noResultMessage.style.display = "none";
        serieDetails.style.display = "block"; // Asegurarse de mostrar los detalles si se encuentran resultados

        carouselHeadings.forEach((heading) => {
            heading.style.display = "block";
        });
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

        const noResultMessage = document.getElementById("txt-no-result");
        const carouselHeadings = document.querySelectorAll(".carousel-category h2");

        noResultMessage.style.display = "none";
        carouselHeadings.forEach((heading) => {
            heading.style.display = "block";
        });
    }
});









