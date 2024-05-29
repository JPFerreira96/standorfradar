document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'THANATOS' && password === '4B%56H3006') {
        // Redireciona para a página de Loading
        window.location.href = 'loading.html';
        localStorage.setItem('lastPage', window.location.href);
    } else {
        showToast('Ungültige Anmeldeinformationen. Bitte versuche es erneut.');
    }
});

function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;


    toastContainer.appendChild(toast);

    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100); 
    setTimeout(() => {
        toast.classList.remove('show');
        
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

