// Función para mostrar la imagen en el modal
function mostrarImagen(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Función para cerrar el modal al hacer clic fuera de la imagen
function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

/* const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

$(".search-bar input")
    .focus(function () {
        $(".header").addClass("wide");
    })
    .blur(function () {
        $(".header").removeClass("wide");
    });

$(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        dd.removeClass("is-active");
    }
}); */

/* $(function () {
    $(".dropdown").on("click", function (e) {
        $(".content-wrapper").addClass("overlay");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropdown") === false) {
            $(".content-wrapper").removeClass("overlay");
        }
    });
}); */


// ===================== MODAL CREAR TAREA =====================
// Obtiene referencias a los elementos del DOM
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modal = document.getElementById('modalCrearTarea');

// Asigna eventos al botón de abrir y cerrar el modal
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// ===================== MODAL EDITAR TAREA =====================
// Obtiene referencias a los elementos del DOM
var openModalBtn = document.getElementById('openModalEditarBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modalEditar = document.getElementById('modalEditarTarea');

// Asigna eventos al botón de abrir y cerrar el modal
openModalBtn.addEventListener('click', function () {
    modalEditar.style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
    modalEditar.style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (event.target == modalEditar) {
        modalEditar.style.display = 'none';
    }
});

// ===================== MODAL ELIMINAR TAREA =====================
// Obtiene referencias a los elementos del DOM
var openModalBtn = document.getElementById('openModalEliminarBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modalEliminar = document.getElementById('modalEliminarTarea');

// Asigna eventos al botón de abrir y cerrar el modal
openModalBtn.addEventListener('click', function () {
    modalEliminar.style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
    modalEliminar.style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (event.target == modalEliminar) {
        modalEliminar.style.display = 'none';
    }
});
