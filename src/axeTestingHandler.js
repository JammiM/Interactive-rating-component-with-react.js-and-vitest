import * as axe from "axe-core";

window.addEventListener("load", function () {
  console.log("All assets are loaded");

  axe
    .run()
    .then((results) => {
      if (results.violations.length) {
        console.error(results.violations);
        throw new Error("Accessibility issues found");
      }
    })
    .catch((err) => {
      console.error("ERROR AXE-01 : ", err.message);
    });
});
