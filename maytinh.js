function cong() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let kq = a + b;
    document.getElementById("kq").innerHTML = kq;
}
function tru() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    kq = a - b;
    document.getElementById("kq").innerHTML = kq;
}
function nhan() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    kq = a * b;
    document.getElementById("kq").innerHTML = kq;
}
function chia() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    kq = a / b;
    document.getElementById("kq").innerHTML = kq;
}