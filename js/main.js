function agregarTarea() {
    // Obtenemos el valor del campo de la tarea
    let nuevaTareaElemento = document.getElementById("nuevaTarea");
    let nuevaTareaTexto = nuevaTareaElemento.value;

    console.log(nuevaTareaTexto);

    // Validamos que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        alert("No puedes ingresar una tarea vacía");
        return
    }

    // Crear el elemento de la lista
    let nuevaTarea = document.createElement("li")
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Crear botón eliminar
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Completar Tarea";

    botonEliminar.onclick = function() {
        nuevaTarea.remove();
    }

    // Agregar boton eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    // Agregar elemento a la lista
    let listaTareas = document.getElementById("listaTareas");
    listaTareas.appendChild(nuevaTarea);

    // Limpiar cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";
}