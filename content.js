const currentUrl = new URL(window.location.href);
chrome.storage.local.get(['whitelist'], function(result) {
  const whitelist = result.whitelist || [];
 if (!whitelist.includes(currentUrl.href)) {
    window.location.href = "blocked.html";
  }
});
