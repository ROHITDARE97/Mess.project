document.addEventListener('DOMContentLoaded', () => {
    const adminForm = document.getElementById('admin-form');
    const loginForm = document.getElementById('login-form');
    const adminSection = document.getElementById('admin-section');
    const loginSection = document.getElementById('login-section');
    
    const ADMIN_CREDENTIALS = {
        username: 'admin',
        password: 'password'
    };

    // Handle login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            loginSection.style.display = 'none';
            adminSection.style.display = 'block';
        } else {
            alert('Invalid credentials');
        }
    });

    // Handle form submission
    adminForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const messName = document.getElementById('mess-name').value;
        const lunchMenu = document.getElementById('lunch-menu').value;
        const dinnerMenu = document.getElementById('dinner-menu').value;

        // You would normally send this data to a server
        console.log(`Mess Name: ${messName}`);
        console.log(`Lunch Menu: ${lunchMenu}`);
        console.log(`Dinner Menu: ${dinnerMenu}`);

        // Clear form
        adminForm.reset();
    });
});
