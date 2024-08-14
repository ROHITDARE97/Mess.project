document.addEventListener('DOMContentLoaded', () => {
    // Sample data with 10 more messes
    const messes = [
        { name: "Mess A", menu: { lunch: "Chicken Curry, Rice, Salad", dinner: "Pasta, Garlic Bread, Soup" } },
        { name: "Mess B", menu: { lunch: "Vegetable Stir Fry, Noodles", dinner: "Pizza, Caesar Salad" } },
        { name: "Mess C", menu: { lunch: "Beef Tacos, Guacamole", dinner: "Spaghetti Bolognese" } },
        { name: "Mess D", menu: { lunch: "Chicken Caesar Wrap", dinner: "Vegetarian Chili" } },
        { name: "Mess E", menu: { lunch: "Grilled Salmon, Veggies", dinner: "Chicken Alfredo Pasta" } },
        { name: "Mess F", menu: { lunch: "Egg Fried Rice, Spring Rolls", dinner: "BBQ Ribs, Coleslaw" } },
        { name: "Mess G", menu: { lunch: "Turkey Sandwich, Chips", dinner: "Stuffed Bell Peppers" } },
        { name: "Mess H", menu: { lunch: "Shrimp Tacos, Salsa", dinner: "Vegetable Stir Fry" } },
        { name: "Mess I", menu: { lunch: "Greek Salad, Hummus", dinner: "Chicken Teriyaki" } },
        { name: "Mess J", menu: { lunch: "Pulled Pork Sandwich", dinner: "Baked Ziti" } },
        { name: "Mess K", menu: { lunch: "Falafel Wrap", dinner: "Beef Stroganoff" } },
        { name: "Mess L", menu: { lunch: "Caprese Salad", dinner: "Chicken Parmesan" } },
        { name: "Mess M", menu: { lunch: "Chicken Noodle Soup", dinner: "Vegetable Curry" } },
        { name: "Mess N", menu: { lunch: "Cobb Salad", dinner: "Pork Schnitzel" } },
        { name: "Mess O", menu: { lunch: "Hummus Bowl", dinner: "Lamb Chops, Mint Sauce" } },
        { name: "Mess P", menu: { lunch: "BBQ Chicken Sandwich", dinner: "Mac and Cheese" } },
        { name: "Mess Q", menu: { lunch: "Quinoa Salad", dinner: "Grilled Steak" } },
        { name: "Mess R", menu: { lunch: "Vegetarian Burrito", dinner: "Seafood Paella" } },
        { name: "Mess S", menu: { lunch: "Pulled Pork Tacos", dinner: "Chicken Pot Pie" } },
        { name: "Mess T", menu: { lunch: "Avocado Toast", dinner: "Beef Wellington" } },
        { name: "Mess U", menu: { lunch: "Mediterranean Wrap", dinner: "Mushroom Risotto" } }
    ];

    const menuList = document.getElementById('menu-list');
    const searchBar = document.getElementById('search-bar');
    const mealTimeSelect = document.getElementById('meal-time');

    const renderMenus = (filterText = '', mealTime = 'lunch') => {
        menuList.innerHTML = ''; // Clear previous results

        const filteredMesses = messes.filter(mess => mess.name.toLowerCase().includes(filterText.toLowerCase()));

        filteredMesses.forEach(mess => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <h3>${mess.name}</h3>
                <p>${mess.menu[mealTime]}</p>
            `;
            menuList.appendChild(menuItem);
        });

        if (filteredMesses.length === 0) {
            menuList.innerHTML = '<p>No results found.</p>';
        }
    };

    searchBar.addEventListener('input', () => {
        renderMenus(searchBar.value, mealTimeSelect.value);
    });

    mealTimeSelect.addEventListener('change', () => {
        renderMenus(searchBar.value, mealTimeSelect.value);
    });

    // Initial render
    renderMenus();
});
