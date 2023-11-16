/* function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 100 * i);
    });
  }
  
  const titulo = document.querySelector(".titulo");
  typeWriter(titulo); */
  document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});