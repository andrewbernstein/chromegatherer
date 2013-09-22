// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    //if we're at a gatherer page
	if (tab.url.indexOf('gatherer.wizards.com') > -1) {
    	// show the handy button
    	chrome.pageAction.show(tabId);
        //when we click on the the handy button, run some scripts
    	chrome.pageAction.onClicked.addListener(function(tab) {
            //add jquery because for some reason wizards doesn't
    		chrome.tabs.executeScript(null, { file: "jquery.js" });
            //run the injector to actually strip the things
            //TODO: Get rid of injecter.js and do it all in here?
    		chrome.tabs.executeScript(null, { file: "injecter.js" });
    	})
  	}
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);