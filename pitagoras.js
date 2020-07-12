let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
class pitagoras{
resultado() {
    if (a.value == "" || b.value == "" || c.value == "") 
    {
        alert("ingresar dos valores");
    }
else if (a.value != "" && b.value != "" && c.value == "") 
    {
        aa = parseInt(a.value);
        bb = parseInt(b.value);
        c.value = Math.sqrt(Math.pow(aa,2) + Math.pow(bb,2));
​
    } 
else if (a.value != "" && b.value == "" && c.value != "")
    {
        aa = parseInt(a.value);
        cc = parseInt(c.value);
        b.value = Math.sqrt(Math.pow(cc,2) - Math.pow(aa,2));
​
    } 
else if (a.value == "" && b.value != "" && c.value != "") 
    {
        bb = parseInt(b.value);
        cc = parseInt(c.value);
        a.value = Math.sqrt(Math.pow(cc,2) - Math.pow(bb,2));
​
    }
}
​
limpiar(){
 a.value = "";
 b.value = "";
 c.value = "";
}
}