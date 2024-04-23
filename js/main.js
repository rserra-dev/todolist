function agregarTarea() {
    // Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    // Validamos que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        alert("No puedes ingresar una tarea vacía");
        return
    }

    // Crear el elemento en la lista
    let nuevaTarea = document.createElement("li")
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Crear botón eliminar

    console.log(nuevaTarea)
}