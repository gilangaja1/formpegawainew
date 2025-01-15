document.addEventListener('DOMContentLoaded', () => {
    // Mengambil data dari localStorage
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
        document.getElementById('nama-result').textContent = data.nama;
        document.getElementById('umur-result').textContent = data.umur;
        document.getElementById('jenis_kelamin-result').textContent = data.jenisKelamin;
        document.getElementById('agama-result').textContent = data.agama;
        document.getElementById('hobi-result').textContent = data.hobi.join(', ');
        document.getElementById('alamat-result').textContent = data.alamat;
    }

    // Animasi fade-in untuk item hasil
    const resultItems = document.querySelectorAll('.result-item');
    resultItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s, transform 0.5s';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});