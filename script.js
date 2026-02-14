// Fungsi navigasi halaman
function openPage(id){
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Fungsi show popup timeline
function showPopup(n){
    const texts = {
        1: "📅 8 Oktober 2025<br>Hari dimana abang ketemu adek, ini hari yang buat abang selalu bersyukur ketika abang ingat ini",
        2: "📅 19 Oktober 2025<br>Disini abang Mulai ngejar adek walaupun abang selalu ditolak bahkan di push habis habisan but abang tidak menyerah",
        3: "📅 29 Desember 2025<br>Ribut Terparah kita, bahkan melibatkan orang ketiga, tapi karena ini kita bisa makin dekat",
        4: "📅 18 Januari 2026<br>hari dimana adek mutusin buat milih abang, disini abang senangg bangettt dan merasa semua kerja keras abang terjawabb makasii ya sayang",
        5: "📅 14 Februari 2026<br>hari ini hari valentine ya? maaf ya abang beneran ga bisa romantis adek, karena banyakk banget hal yang belum abang alami, atau bisa dibilang kurang nya pengalaman abang hehe, tapi semoga adek seneng yaa"
    };
    document.getElementById("popupText").innerHTML = texts[n];
    document.getElementById("popup").classList.add("active");
}

// Fungsi tutup popup
function closePopup(){
    document.getElementById("popup").classList.remove("active");
}

// Fungsi cek password
function checkPassword(){
    const password = document.getElementById("secretPassword").value;
    if(password === "08102025"){
        document.getElementById("secretMessage").style.display = "block";
    } else {
        alert("Maaf sayang, passwordnya salah 😢 Coba ingat-ingat lagi");
    }
}

// Fungsi update countdown
function updateCountdown() {
    const targetDate = new Date('October 8, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = String(days).padStart(2,'0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2,'0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2,'0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2,'0');
}

// Event listener untuk popup
document.addEventListener('DOMContentLoaded', function() {
    // Klik luar popup untuk tutup
    document.getElementById('popup').addEventListener('click', function(e) {
        if(e.target === this) closePopup();
    });
    
    // Jalankan countdown setiap detik
    setInterval(updateCountdown, 1000);
    
    // Jalankan pertama kali
    updateCountdown();
});