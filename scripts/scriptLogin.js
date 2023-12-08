function login() {
    return new Promise((resolve, reject) => {
        // valores del form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // api con esquema http://
        const api = 'http://10.1.142.212:3000/users/login';

        // Realiza una solicitud POST a la API
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta de la API
                console.log(data);

                // Realiza acciones adicionales con la respuesta de la API
                alert('Inicio de sesión exitoso');
                window.location.href = "../todo/index.html";

                // Resuelve la promesa con la respuesta de la API
                resolve(data);
            })
            .catch(error => {
                // Maneja errores de la solicitud
                alert('Error al iniciar sesión');
                console.error('Error:', error);

                // Rechaza la promesa con el error
                reject(error);
            });
    });
}

/* 
// Ejemplo de cómo puedes manejar la respuesta de la función
login().then(response => {
    console.log('Respuesta de la función:', response);
    // Realiza acciones adicionales con la respuesta de la API
    alert('Inicio de sesión exitoso');
    window.location.href = "../todo/index.html";
})
    .catch(error => {
        console.error('Error al llamar a la función:', error);
        printError(error);
    });
 */