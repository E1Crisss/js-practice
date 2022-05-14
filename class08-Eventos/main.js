/* 
*Crear un HTML con un H1 y un p.
*Tanto el H1 como el p deben tener texto en su interior.
*Crear un CSS con estilos que le den color.

Con lo visto en clase, lograr que, luego de 3 segundos de cargada la pagina, el h1 cambie de color y cambiar el texto dentro del p.
*/
const camH1 = document.getElementById('hache1');
const cambioP = document.getElementById('parrafo');

let cambiodecolor = () =>{   
    setTimeout = (() => camH1.style.color = "red", 3000)
}
camH1.addEventListener("onload", cambiodecolor());lor

/* setTimeout(() => {
    console.log(document.getSelection().toString());
  }, 2000) */


// /BREAKOUT ROOMS

// Declarar un array de USUARIOS  vacio.

let users = [];

// Crear un campo de texto USERNAME, detectar cuando ocurre un cambio y mostrar en consola el texto ingresado.

const input = document.getElementById('username')

input.addEventListener('change', (e) => {
    input.style.backgroundColor = "red";
    console.log(e.target.value)
})

// Crear un campo de texto PASSWORD, detectar cuando ocurre un cambio y mostrar en consola el texto ingresado.

const clave = document.getElementById('clave');

clave.addEventListener('change', (e) => {
    console.log(e.target.value)
})


// Crear un botón de REGISTRARSE que, cuando lo toco, cree un usuario con la estructura {username, password} y lo guarde en el array usuarios.

const newUser = document.getElementById('save');

save.addEventListener('click', () => {
    users.push({username, clave})
    console.log(`Nuevo Usuario ${users}`);
    console.log(users);
})

//Crear un boton que diga LOGIN, que cuando lo toco tome los valores de username y password, valide si existe un usuario con ese username en mi array de usuarios. Si existe, validar que la contraseña coincida con el usuario, si la contraseña es incorrecta mostrar en pantalla La contraseña ingresada es incorrecta.  Si no existe, escribir en pantalla El usuario ignresado es invalido y limpiar los campos de texto.

const valUserPass = document.getElementById('btnValidad');

btnValidad.addEventListener('click', ()=>{
    users.filter(username.value == users);
})



//Si el usuario y la contrasenia son correctas, limpiar el HTML de input y botones y mostrar el texto Hola {username}, junto con un input que detecte en tiempo real los cambios e imprima en pantalla el texto ingresado.

//EXTRA, detectar si el username existe en el array de usuarios al perder foco del input en lugar de hacerlo cuando se toca el boton.


/*  */