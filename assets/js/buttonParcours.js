document.getElementById('buttonUPEC').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('buttonLAFA').classList.remove('on');
});

document.getElementById('buttonLAFA').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('buttonUPEC').classList.remove('on');
});

document.getElementById('buttonUPEC').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('buttonLAFA').classList.remove('on');
    document.getElementById('textUPEC').classList.remove('hidden');
    document.getElementById('textLAFA').classList.add('hidden');
});

document.getElementById('buttonLAFA').addEventListener('click', function() {
    this.classList.add('on');
    document.getElementById('buttonUPEC').classList.remove('on');
    document.getElementById('textLAFA').classList.remove('hidden');
    document.getElementById('textUPEC').classList.add('hidden');
});