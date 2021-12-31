// Input Jam Masuk
const jamMasuk = prompt('Masukan jam masuk ? ');

// Input Jam Keluar
const jamKeluar = prompt('Masukan jam keluar ? ');

// Selisih
const selisih = Number(jamKeluar) - Number(jamMasuk);

// Tarif Awal
const tarifAwal = 3000;
if(selisih <= 2){
    alert(`Biaya Keluaran : ${tarifAwal}`);
} else { 
    const tarifAkhir = tarifAwal + (selisih - 2) * 1000;
    alert(`Biaya Keluaran : ${tarifAkhir}`);
}