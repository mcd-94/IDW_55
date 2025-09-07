document.addEventListener("DOMContentLoaded", () => {
  const headerContentContainer = document.getElementById(
    "headerContentContainer",
  );
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

  const isMenuOpen = false;

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

      if (isHidden) {
        body.classList.add("no-scroll");
        headerContentContainer.style.borderBottomLeftRadius = 0;
        headerContentContainer.style.borderBottomRightRadius = 0;
      } else {
        body.classList.remove("no-scroll");
        headerContentContainer.style.borderBottomLeftRadius = "0.5em";
        headerContentContainer.style.borderBottomRightRadius = "0.5em";
      }
    }
  });

  backdrop.addEventListener("click", () => {
    mainNavMenu.classList.add("hidden");
    backdrop.classList.add("hidden");
    document.getElementById("burgerIcon").style.display = "block";
    document.getElementById("closeIcon").style.display = "none";
    headerContentContainer.style.borderBottomLeftRadius = "0.5em";
    headerContentContainer.style.borderBottomRightRadius = "0.5em";
    body.classList.remove("no-scroll");
  });
});
