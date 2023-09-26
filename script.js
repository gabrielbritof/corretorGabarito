var btnAtivarWebcam = document.getElementById('btnAtivarWebcam');
var btnFecharWebcam = document.getElementById('btnFecharWebcam');
var video = document.getElementById('video');
var stream = null;
var isCameraAtiva = false;

btnAtivarWebcam.addEventListener('click', function() {
  ativarWebcam();
});

btnFecharWebcam.addEventListener('click', function() {
  fecharWebcam();
});

function fecharWebcam() {
  stream.getTracks().forEach(track => track.stop());
  video.srcObject = null;
  isCameraAtiva = false;
  btnFecharWebcam.style.display = 'none';
  btnAtivarWebcam.style.display = 'block';
}

function ativarWebcam() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(mediaStream) {
      video.srcObject = mediaStream;
      video.play();
      stream = mediaStream;
      isCameraAtiva = true;
      btnAtivarWebcam.style.display = 'none';
      btnFecharWebcam.style.display = 'block';
    })
    .catch(function(err) {
      console.log('Erro ao acessar a câmera: ' + err);
    });
}
