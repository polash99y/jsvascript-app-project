const recipeRasult = document.getElementById("recipeResult");

const searchButton = () => {
  const query = document.getElementById("searchInput").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((res) => res.json())
    .then((data) => {
      const recipes = data.meals;
      if (recipes) {
        recipes.forEach((recipe) => {
          const recipeDiv = document.createElement("div");
          recipeDiv.innerHTML = `
          <h3>${recipe.strMeal}</h3>
          <img src=${recipe.strMealThumb} width="100%">
          <p>${recipe.strInstructions}</p>
          `;
          recipeRasult.appendChild(recipeDiv);
        });
        document.getElementById("searchInput").value = "";
      } else {
        recipeRasult.innerHTML = "<p>No recipes found</p>";
      }
    });
};
