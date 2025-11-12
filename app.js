document.getElementById("searchBtn").addEventListener("click", () => {
    // Fetch the data from superheroes.php
    fetch("superheroes.php")
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error("Error fetching superheroes:", error);
        });
});
