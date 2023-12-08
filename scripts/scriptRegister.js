function register() {
    // valores del form
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // api
    const api = 'http://10.1.142.212:3000/users';


    fetch('http://10.1.142.212:3000/users')
        .then(res => {
            alert(res)
            return res.json();
        })
        .then(data => {
            alert(data)
            console.log(data);
        })
        .catch(error => console.log(error));
}

// Realiza una solicitud POST a la API
/* fetch(api, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        username: username,
        svpassword: password
    })
})
    .then(response => {
        // Verifica si la respuesta fue exitosa (código de estado en el rango 200)
        if (!response.ok) {
            // Si la respuesta no fue exitosa, lanza un error para ser manejado en el bloque catch
            throw new Error('Error en la solicitud');
        }
        // Si la respuesta fue exitosa, retorna la respuesta como JSON
        return response.json();
    })
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
    }); */



