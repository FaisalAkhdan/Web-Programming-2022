function tambah() {
    let angka1 = parseInt(document.getElementById("angka1").value);
    let angka2 = parseInt(document.getElementById("angka2").value);
    let tambah = angka1 + angka2
    let hasil = document.getElementById("hasil")
    hasil.innerHTML = tambah
}