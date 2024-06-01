const form = document.getElementById('ingredient-form');
const recipesDiv = document.getElementById('recipes');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const ingredient1 = encodeURIComponent(form.ingredient1.value);
    const ingredient2 = encodeURIComponent(form.ingredient2.value);
    const ingredient3 = encodeURIComponent(form.ingredient3.value);

    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient1},${ingredient2},${ingredient3}&apiKey=f66331f167a64237b0e94e4bc6ae6029`);
    const data = await response.json();

    displayRecipes(data);
});

function displayRecipes(recipes) {
    recipesDiv.innerHTML = '';
    for (const recipe of recipes) {
        const div = document.createElement('div');
        div.className = 'recipe';

        const link = document.createElement('a');
        link.href = `https://www.google.com/search?q=${encodeURIComponent(recipe.title)}+recipe`;
        link.textContent = recipe.title;

        const img = document.createElement('img');
        img.src = recipe.image;

        div.appendChild(link);
        div.appendChild(img);

        recipesDiv.appendChild(div);
    }
}