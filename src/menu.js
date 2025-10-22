export async function menu(menuC) {
  const content = document.querySelector('#content');

  if (menuC.hasChildNodes()) return; // prevent duplicates

  try {
    // Create 10 fetch requests in parallel
    const requests = [
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan')
    .then(res => res.json())
    .then(data => data.meals)
];

    const [meals] = await Promise.all(requests);

    // Build each meal’s DOM and append
    meals.forEach(meal => {
      const title = document.createElement('p');
      const img = document.createElement('img');

      title.textContent = meal.strMeal;
      img.src = meal.strMealThumb;
      img.alt = meal.strMeal;

      const mealCard = document.createElement('div');
      mealCard.classList.add('mealCard');
      mealCard.append(title, img);

      menuC.appendChild(mealCard);
    });

    content.appendChild(menuC);
  } catch (err) {
    console.error('Error fetching meals:', err);
  }
}
