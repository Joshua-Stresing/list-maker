export function renderIngredientLI(item) {
    const li = document.createElement('li');
    li.textContent = `${item.qty} ${item.measurement} of ${item.ingredient}`;
    return li;
}

export function renderMealLI(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.count} Ingredients`;
    return li;
}
