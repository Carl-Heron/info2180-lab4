document.getElementById("searchBtn").addEventListener("click", searchHero);

document.getElementById("searchInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchHero();
});

function searchHero() {
  const query = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("result");

  fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
    .then(response => response.text())
    .then(data => {
      resultDiv.innerHTML = data;
    })
    .catch(error => {
      console.error("Error:", error);
      resultDiv.innerHTML = "<p class='not-found'>An error occurred.</p>";
    });
}
