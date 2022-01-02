
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {

}


chrome.browserAction.onClicked.addListener(function (tab) {

    if (urlRegex.test(tab.url)) {

        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    }
});