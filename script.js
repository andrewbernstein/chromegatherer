// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
// If the letter 'g' is found in the tab's URL...
	if (tab.url.indexOf('gatherer.wizards.com') > -1) {
    	// ... show the page action.
    	chrome.pageAction.show(tabId);
    	//tab.executeScript('injecter.js');
    	//details = new InjectDetails('script.js');
    	//chrome.tabs.executeScript(tabId, details);
    	chrome.pageAction.onClicked.addListener(function(tab) {
    		chrome.tabs.executeScript(null, {file: "jquery.js"});
    		chrome.tabs.executeScript(null, {file: "injecter.js"});
    	})
  	}
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);