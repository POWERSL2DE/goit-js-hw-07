// // const allCategories = document.querySelector('#categories');
// const categoriesCount = allCategories.children.length;
// console.log(`Number of categories: ${categoriesCount}`);


// Array.from(allCategories.children).forEach(category => {
//     const categoryNames = category.querySelector('h2');
//     console.log(`Category: ${categoryNames.textContent}`);

//     const categoryElements = category.querySelectorAll('ul li');
//     console.log(`Elements: ${categoryElements.length}`); 
// });


const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
    const categoryName = category.querySelector(`h2`);
    console.log(`Category: ${categoryName.textContent}`);

    const categoryElement = category.querySelectorAll(`ul li`);
    console.log(`Elements: ${categoryElement.length}`);
});
