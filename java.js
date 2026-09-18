document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("searchBtn");

    const pageMap = {
        "start": "index.html",
        "index": "index.html",
        "home": "index.html",
        "about": "about.html",
        "services": "about.html",
        "service": "about.html",
        "contact": "about.html",
        "quality service": "learnmore2.html",
        "quality": "learnmore2.html",
        "experienced mechanics": "learnmore1.html",
        "mechanics": "learnmore1.html",
        "learn more": "about.html",
        "fair pricing": "learnmore3.html",
        "pricing": "learnmore3.html",
        "quality parts": "learnmore4.html",
        "parts": "learnmore4.html",
        "customer satisfaction": "learnmore5.html",
        "satisfaction": "learnmore5.html"
    };

    function searchPage() {
        const searchValue = (searchInput ? searchInput.value : "").trim().toLowerCase();

        if (!searchValue) {
            alert("Please enter a page name");
            return;
        }

        const targetPage = pageMap[searchValue];

        if (targetPage) {
            window.location.href = targetPage;
        } else {
            alert("Page not found!");
        }
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchPage);
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                searchPage();
            }
        });
    }
});