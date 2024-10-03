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
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        categoryContainer.append(button);
    });
}
loadCategories();