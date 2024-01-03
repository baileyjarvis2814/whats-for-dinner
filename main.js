// Dishes
var dishes = {
    starter: ['French Fries', 'Blooming Onion', 'Artichoke Dip'],
    mainCourse: ['Lemon Chicken', 'Garlic Shrimp Pasta', 'Filet Mignon'],
    dessert: ['Tiramisu', 'Chocolate cake', 'Gelato'],
  };
  
  /*Corral the variables into the function*/
  function generateRandomDish() {
    var category = document.getElementById('dishCategory').value;
    var dishNameElement = document.getElementById('dishName');
    var cookpotIcon = document.getElementById('cookpotIcon');
    var dishesInCategory = dishes[category];
    var randomDish = dishesInCategory[Math.floor(Math.random() * dishesInCategory.length)];
    dishNameElement.textContent = randomDish;
    cookpotIcon.style.display = 'none';

    cookpotIconWrapper.style.display = 'block';
  cookpotIcon.style.display = 'block'; 
  }