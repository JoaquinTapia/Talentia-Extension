// src/background/background.ts
console.log("\u{1F680} TalentIA Extension iniciada.");
chrome.runtime.onInstalled.addListener(() => {
  console.log("\u2705 TalentIA instalada correctamente.");
});
chrome.runtime.onStartup.addListener(() => {
  console.log("\u2705 TalentIA iniciada.");
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("\u{1F4E9} Mensaje recibido:", message);
  sendResponse({
    success: true,
    message: "Mensaje recibido correctamente."
  });
  return true;
});
//# sourceMappingURL=background.js.map
