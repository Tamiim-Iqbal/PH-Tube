// Fetch,  Load and  Show Categories on html
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.error(error))
}

const displayCategories = (categories) => {

    const categoryContainer = document.getElementById("category");

    // console.log(categories);
    categories.forEach(item => {
        // console.log(item);

    // create button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>
    `;
    
    //add button to category container
    categoryContainer.append(buttonContainer);
    });
}
loadCategories();