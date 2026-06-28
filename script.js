function updateFooterInformation() {
    var yearElement = document.getElementById("year");
    var pageLocationElement = document.getElementById("pageLocation");
    var lastModifiedElement = document.getElementById("lastModified");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (pageLocationElement) {
        pageLocationElement.textContent = "Page Location: " + window.location.href;
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    }
}

function setupThemeToggle() {
    var themeToggle = document.querySelector(".theme-toggle");
    var savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("rafiTheme") || "light";
    } catch (error) {
        savedTheme = "light";
    }

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            var isDark = document.body.classList.contains("dark-mode");

            try {
                localStorage.setItem("rafiTheme", isDark ? "dark" : "light");
            }  catch (error) {
                console.log("Theme preference could not be saved.");
        }

            themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    }
}

updateFooterInformation();
setupThemeToggle();
