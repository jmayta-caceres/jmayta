import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("j2mc", () => {
  return {
    navActive: false,
    darkActive: false,
    closeNav() {
      this.navActive = false;
    },
    toggleDark() {
      this.darkActive = !this.darkActive;
    },
    toggleNav() {
      this.navActive = !this.navActive;
    },
  };
});

window.Alpine.start();
