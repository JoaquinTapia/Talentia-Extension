console.log("✅ TalentIA detectó LinkedIn");

chrome.runtime.sendMessage({
    action: "linkedin_loaded"
});