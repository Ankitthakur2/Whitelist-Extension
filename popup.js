document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('settings-form');
  form.addEventListener('submit', updateWhitelist);
});

function updateWhitelist(event) {
  event.preventDefault();

  const newWhitelistInput = document.getElementById('whitelist');
  
  const newWhitelist = newWhitelistInput.value.trim();
    
  if (newWhitelist) {
    
    chrome.storage.local.get(['whitelist'], function(result) {
      const existingWhitelist = result.whitelist || [];
        
     
      const updatedWhitelist = [...new Set([...existingWhitelist, newWhitelist])];
     
      
      chrome.storage.local.set({
        whitelist: updatedWhitelist
      }, () => {
        console.log('Whitelist updated');
      });
    });
  }
}
