document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit default

    // Mengambil nilai dari input
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    // Nomor WhatsApp tujuan
    var phoneNumber = '+6281338576840'; // Ganti dengan nomor WhatsApp Anda

    // Membuat URL WhatsApp
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' 
        + encodeURIComponent('Nama : ' + nama + '\nEmail : ' + email + '\nPesan : ' + pesan);

    // Redirect ke WhatsApp
    window.location.href = whatsappURL;
});