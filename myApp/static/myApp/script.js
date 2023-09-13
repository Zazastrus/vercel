document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const anakin = document.getElementById('anakin');
    const kenobi = document.getElementById('kenobi');

    btn.onclick = () => {
        if (kenobi.style.display == 'block'){
            kenobi.style.display = 'none';
            anakin.style.display = 'block';
        }
        else{
            kenobi.style.display = 'block';
            anakin.style.display = 'none';
        }
    }
})