// src/popup/popup.ts
var button = document.getElementById("testButton");
button?.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    {
      action: "test"
    },
    (response) => {
      console.log(response);
    }
  );
});
//# sourceMappingURL=popup.js.map
