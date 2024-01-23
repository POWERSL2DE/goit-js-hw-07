const allCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
    const categoryName = category.querySelector(`h2`);
    console.log(`Category: ${categoryName.textContent}`);

    const categoryElement = category.querySelectorAll(`ul li`);
    console.log(`Elements: ${categoryElement.length}`);
});
