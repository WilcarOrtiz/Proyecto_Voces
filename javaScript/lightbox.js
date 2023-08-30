const videos = document.querySelectorAll(".img-galeria");
const videoLight = document.querySelector(".Agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const closeLight = document.querySelector(".close");

videos.forEach((video) => {
  video.addEventListener("click", () => {
    aparecerVideo(video.querySelector("source").getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== videoLight) {
    contenedorLight.classList.toggle("show");
    videoLight.classList.toggle("showImage");
  }
});

const aparecerVideo = (videoSrc) => {
  videoLight.querySelector("source").src = videoSrc;
  videoLight.load(); // Cargar el nuevo video
  contenedorLight.classList.toggle("show");
  videoLight.classList.toggle("showImage");
};
