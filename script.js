function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    const errors = document.getElementsByClassName('error');

    // Reset errors
    for (let error of errors) {
        error.style.display = 'none';
    }

    // Validate fields
    const nama = document.getElementById('nama').value.trim();
    const umur = document.getElementById('umur').value.trim();
    const jenisKelamin = document.getElementById('jenis_kelamin').value;
    const agama = document.querySelector('input[name="agama"]:checked');
    const hobi = document.querySelectorAll('input[name="hobi"]:checked');
    const alamat = document.getElementById('alamat').value.trim();

    if (!nama) { document.getElementById('nama-error').style.display = 'block'; isValid = false; }
    if (!umur || umur < 16 || umur > 60) { document.getElementById('umur-error').style.display = 'block'; isValid = false; }
    if (!jenisKelamin) { document.getElementById('jenisKelamin-error').style.display = 'block'; isValid = false; }
    if (!agama) { document.getElementById('agama-error').style.display = 'block'; isValid = false; }
    if (hobi.length === 0) { document.getElementById('hobi-error').style.display = 'block'; isValid = false; }
    if (!alamat) { document.getElementById('alamat-error').style.display = 'block'; isValid = false; }

    if (isValid) {
        // Simpan data ke localStorage
        const formData = {
            nama,
            umur,
            jenisKelamin,
            agama: agama.value,
            hobi: Array.from(hobi).map(h => h.value),
            alamat
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect ke result.html
        window.location.href = 'result.html';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employeeForm');
    const container = document.querySelector('.container');

    // Add fade-in animation to the form
    container.style.opacity = 0;
    container.style.transform = 'scale(0.95)';
    setTimeout(() => {
        container.style.transition = 'opacity 1s, transform 0.5s';
        container.style.opacity = 1;
        container.style.transform = 'scale(1)';
    }, 100);

    // Validation functionality
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.style.display = 'none');

        let isValid = true;

        // Validate nama
        const nama = document.getElementById('nama').value.trim();
        if (!nama) {
            document.getElementById('nama-error').style.display = 'block';
            isValid = false;
        }

        // Validate umur
        const umur = document.getElementById('umur').value.trim();
        if (!umur || umur < 18 || umur > 100) {
            document.getElementById('umur-error').style.display = 'block';
            isValid = false;
        }

        // Other validations
        const jenisKelamin = document.getElementById('jenis_kelamin').value;
        if (!jenisKelamin) {
            document.getElementById('jenisKelamin-error').style.display = 'block';
            isValid = false;
        }

        const agama = document.querySelector('input[name="agama"]:checked');
        if (!agama) {
            document.getElementById('agama-error').style.display = 'block';
            isValid = false;
        }

        const hobi = document.querySelectorAll('input[name="hobi"]:checked');
        if (hobi.length === 0) {
            document.getElementById('hobi-error').style.display = 'block';
            isValid = false;
        }

        const alamat = document.getElementById('alamat').value.trim();
        if (!alamat) {
            document.getElementById('alamat-error').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Form berhasil disubmit!');
            form.reset();
        }
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
