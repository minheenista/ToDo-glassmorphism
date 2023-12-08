function login() {
    // valores del form
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // api
    const api = '';

    // Realiza una solicitud POST a la API
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta de la API
            console.log(data);
            alert('Inicio de sesión exitoso');
            window.location.href = "../todo/index.html";

            // Aquí puedes realizar acciones adicionales, como redireccionar a otra página
        })
        .catch(error => {
            // Maneja errores de la solicitud
            alert('Error al iniciar sesión');
            window.location.href = "../todo/index.html";
            console.error('Error:', error);
        });
}