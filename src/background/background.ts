console.log("🚀 TalentIA Extension iniciada.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ TalentIA instalada correctamente.");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("✅ TalentIA iniciada.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📩 Mensaje recibido:", message);

  sendResponse({
    success: true,
    message: "Mensaje recibido correctamente."
  });

  return true;
});