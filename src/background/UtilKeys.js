var UTIL_KEYS = {};


UTIL_KEYS.REQUEST_FILTER = {
	urls: ["<all_urls>"],
	types: ["script", "stylesheet", "image", "font", "object", "ping", "csp_report", "media", "websocket", "other"]
};//main_frame, sub_frame, stylesheet, script, image, font, object, xmlhttprequest, ping, csp_report, media, websocket, other
UTIL_KEYS.REQUEST_OPTIONS = ["blocking", "responseHeaders"];
UTIL_KEYS.SAVED_URLS = "SAVED_URLS";
UTIL_KEYS.EXCLUDED_URLS = ["chrome://", "chrome-devtools://"];


UTIL_KEYS.CACHECONTROL_TYPE = {
	CACHE: "cache",
	NOSTORE: "nostore",
	IGNORE: "default"

};



var chromeGetCurrentTab = function(callback) {
	chrome.tabs.query({
		active: true,
		url: "*://*/*"
	}, function(tabs) {
		callback(tabs[0]);
	});
};