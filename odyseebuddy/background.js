/* Copyright 2023 biolithic. All rights reserved. */
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "tabUpdated": activeTab }, function(response) { return true; });
  });

  if (info.status === 'complete') {
    if ( tab.url.indexOf("odysee.com") > -1) {
        chrome.storage.sync.set({"odysee_site": tab.id}, function() {
      });
    }

    setTimeout(function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"chatloaded": "odyseebuddyloaded"}, function(response) { return true; });
        chrome.runtime.setUninstallURL('https://odyseebuddyapp.github.io/uninstall');
      });
    }, 1000);
  }
  return true;
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "clickedmessage": "clicked" }, function(response) { return true; });
    chrome.tabs.sendMessage(activeTab.id, { "clickedTab": activeTab }, function(response) { return true; });
  });

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['open_side_menu.js']
  });
});

chrome.runtime.onInstalled.addListener(function (details) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "message": "onInstalled" }, function(response) { return true; });
    });
});

chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": command}, function(response) { return true; });
  });
});