function genDorks(){
    var cantidad = document.getElementById("cantidad").value;

    var configuraciones = document.getElementById("configuraciones").value.split("\n");
    var extensiones = document.getElementById("extensiones").value.split("\n");
    var atributos = document.getElementById("atributos").value.split("\n");

    let contador = 0;
    let cantidadDorks = 0;

    for (let i = 0; i < configuraciones.length; i++) {
        let configuracion = configuraciones[i];
        for (let o = 0; o < extensiones.length; o++) {
            let extension = extensiones[o];
            for (let u = 0; u < atributos.length && cantidadDorks < cantidad; u++) {
                let atributo = atributos[u];
                
                document.getElementById("resultado").innerHTML += configuracion + extension + "?" + atributo + "=\n";
                cantidadDorks++;
                contador++;
            }
        }
    }
}

function cargarGerDorks() {
    document.getElementById("configuraciones").innerHTML = "inurl:\nintext:\nallintext:\nallintitle:\nsource:\nfiletype:\ninsubject:\nallinanchor:\nallinurl:\ncache:\ninanchor:\ninfo:\nintitle:\nlink:\n";
    document.getElementById("extensiones").innerHTML = ".php\n.php4\n.php3\n.asp\n.html\n.jsp\n.aspx\n.cgi\n.cfm\n.flv\n.pdf\n.jsf\n.asinx\n.psml\n.raw\n.file\n.tss\n.blog\n.htm\n.ht\n";
    document.getElementById("atributos").innerHTML = "page_id\ncat\ncategory\nid\ncoID\navd\ninclude\nparam\npanel\nsec\nitem_id\nproduct_id\npurchase_id\nlogin_id\nid\nuser_id\nregister\ngame_id\ntype\ntype_id\ngamer_id\nuser_id\nusername_id\n";
}