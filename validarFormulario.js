function validarFormulario() {
    let pnc = /\d{8}/gi;
    let pncl = /^[a-zA-Z]{1}\d{8}/;
    let pcp = /\d{5}/;
    let ptel = /\d{10}/;
    let corr = /[a-zA-Z]{5-10}\@[a-zA-Z]{5-10}\.[a-zA-Z]{2-5}/;
    let pass = /[a-zA-Z]{5-10}\d{1}/;
    let nc = document.getElementById("numControl").value;
    let ncl = document.getElementById("numControlL").value;
    let cp = document.getElementById("cp").value;
    let tele = document.getElementById("tel").value;
    let cor = document.getElementById("correo").value;
    let pas = document.getElementById("pass").value;

    console.log("hola");
    console.log(nc.toString().match(pnc));

    if(nc.toString().match(pnc) && ncl.toString().match(pncl) && cp.toString().match(pcp) &&
        tele.toString().match(ptel) && cor.toString().match(corr) && pas.toString().match(pass)){
            alert("funciona")
        }
}


/*
validar CP
validar numero de control
validar num control con letra
numero de telefono
validar correo
validar contraseña 1 mayuscula 1 minuscula 1 numero
*/