function register() {
    // valores del form
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
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
            name: name,
            lastname: lastname,
            email: email,
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta de la API
            console.log(data);
            alert('Registro exitoso');
            window.location.href = "../login.html";

            // Aquí puedes realizar acciones adicionales, como redireccionar a otra página
        })
        .catch(error => {
            // Maneja errores de la solicitud
            alert('Error al registrar');
            console.error('Error:', error);
        });
}