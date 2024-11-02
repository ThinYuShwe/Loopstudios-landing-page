document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const onclickHamburger = document.querySelector(".onclickHamburger");
  const close = document.querySelector(".close");

  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("stopScroll");
    onclickHamburger.style.display = "block";
  });

  close.addEventListener("click", () => {
    onclickHamburger.style.display = "none";
    document.body.classList.remove("stopScroll");
  });
});
