document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const anakin = document.getElementById('anakin');
    const kenobi = document.getElementById('kenobi');

    btn.onclick = () => {
        if (kenobi.disabled == false){
            kenobi.disabled = true;
            anakin.disabled = false;
        }
        else{
            kenobi.disabled = false;
            anakin.disabled = true;
        }
    }
})