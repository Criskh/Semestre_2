import { api } from "./api.js";


let root = document.getElementById("root")

let clases = document.createElement("h1")


root.appendChild(clases)


api.forEach(sem => {

    let contsem =  document.createElement("div")
    contsem.classList.add("semestre")

    // div para el titulo semestre
    let titulo = document.createElement("p")
    titulo.classList.add("nombre")
    titulo.textContent = `${sem.nombre}`



    let numero = document.createElement("p")
    numero.classList.add("num")
    numero.textContent = `${sem.numero}`

    // Recorremos los cursos del semestre
    sem.cursos.forEach(curso => {

    let cajita = document.createElement("div");
    cajita.classList.add("cajita");

    // ----------------------------
    // Código del curso
    // ----------------------------
    let codigo = document.createElement("p");
    codigo.classList.add("codigo");
    codigo.textContent = curso.codigo;

    // ----------------------------
    // Nombre del curso
    // ----------------------------
    let nombre = document.createElement("p");
    nombre.classList.add("nombre");
    nombre.textContent = curso.nombre;

    // ----------------------------
    // Créditos
    // ----------------------------
    let credito = document.createElement("p");
    credito.classList.add("cred");
    credito.textContent = curso.creditos;

    // ----------------------------
    // Requisitos
    // ----------------------------
    let divcurso = document.createElement("div");
    divcurso.classList.add("reque");

    // Convertir requisitos
    let requisitos = curso.requisitos === "-"
        ? []
        : curso.requisitos.split(",").map(r => r.trim());

    if (requisitos.length > 0) {
        requisitos.forEach(r => {
            let line = document.createElement("p");
            line.textContent = `• ${r}`;
            divcurso.appendChild(line);
        });
    } else {
        let ninguno = document.createElement("p");
        ninguno.textContent = "Ninguno";
        divcurso.appendChild(ninguno);
    }

    let chk = document.createElement("input");
    chk.type = "checkbox";
    chk.classList.add("check");
    chk.value = curso.codigo;   // Puedes usar nombre, codigo, id, etc.

    chk.addEventListener("change", () => {
        console.log(`Checkbox de ${curso.nombre}:`, chk.checked);
    });

    // ----------------------------
    // Botón (asumo que ya existe)
    // ----------------------------
    cajita.appendChild(nombre);
    cajita.appendChild(credito);
    cajita.appendChild(codigo);
    cajita.appendChild(divcurso);
    cajita.appendChild(chk);

    // Agregar cajita al contenedor
    contsem.appendChild(cajita);

});



    contsem.appendChild(numero)
    contsem.appendChild(titulo)
    root.appendChild(contsem)
});

