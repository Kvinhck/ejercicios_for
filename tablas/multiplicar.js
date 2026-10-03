function generarTablas(){
    let numero=5;
    let desde=1;
    let hasta=12;
    let conte=document.getElementById("txtTabla");
    let titulo = document.getElementById("txtTitulo");
    let contenido="";

    titulo.innerHTML="Tabla del "+numero;
    for (let i=desde;i<=hasta;i++){
        let resultado=numero*i;
        contenido=contenido+"<tr><td> " + numero + " x " + i + " = " + resultado + " </tr></td>";
    }
    conte.innerHTML=contenido
}