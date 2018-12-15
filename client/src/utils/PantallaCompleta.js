const initEvents = (salir = ()=>{}) => {
    const eventos = [
        "fullscreenchange",
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "msfullscreenchange"
      ];

    eventos.forEach(event => {
        document.addEventListener(event, () => {
          if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
          ) {
            console.log("full screen");
          } else {
            salir();
            console.log("saliendo full screen");
          }
        });
      });
};

const manejaPantallaCompleta = (selector) => {
    const target = document.querySelector(selector);
    if (target.requestFullscreen) target.requestFullscreen();
    else if (target.mozRequestFullScreen) target.mozRequestFullScreen();
    else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
    else if (target.msRequestFullscreen) target.msRequestFullscreen();
};

const manejaSalirPantallaCompleta = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

export {manejaPantallaCompleta, manejaSalirPantallaCompleta, initEvents};