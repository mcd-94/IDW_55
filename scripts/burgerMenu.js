document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.getElementById("burgerButton");
  const mainNavMenu = document.getElementById("mainNavMenu");
  const backdrop = document.getElementById("backdrop");
  const body = document.body;

  function updateMenuDisplay() {
    if (window.innerWidth < 768) {
      mainNavMenu.classList.add("hidden");
      backdrop.classList.add("hidden");
      body.classList.remove("no-scroll");
    } else {
      mainNavMenu.classList.remove("hidden");
      backdrop.classList.add("hidden");
      body.classList.remove("no-scroll");
    }
  }

  updateMenuDisplay();
  window.addEventListener("resize", updateMenuDisplay);

  burgerButton.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      const isHidden = mainNavMenu.classList.contains("hidden");
      mainNavMenu.classList.toggle("hidden");
      backdrop.classList.toggle("hidden", !isHidden);

      document.getElementById("burgerIcon").style.display = isHidden
        ? "none"
        : "block";
      document.getElementById("closeIcon").style.display = isHidden
        ? "block"
        : "none";

      // Bloquear o desbloquear scroll
      if (isHidden) {
        body.classList.add("no-scroll");
      } else {
        body.classList.remove("no-scroll");
      }
    }
  });

  backdrop.addEventListener("click", () => {
    mainNavMenu.classList.add("hidden");
    backdrop.classList.add("hidden");
    document.getElementById("burgerIcon").style.display = "block";
    document.getElementById("closeIcon").style.display = "none";
    body.classList.remove("no-scroll"); // desbloquear scroll
  });
});
