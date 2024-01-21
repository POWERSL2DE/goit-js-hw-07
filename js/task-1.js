const allCategories = document.querySelector('#categories');
const categoriesCount = allCategories.children.length;
console.log(`Number of categories: ${categoriesCount}`);


Array.from(allCategories.children).forEach(category => {
    const categoryNames = category.querySelector('h2');
    console.log(`Category: ${categoryNames.textContent}`);

    const categoryElements = category.querySelectorAll('ul li');
    console.log(`Elements: ${categoryElements.length}`);
});

