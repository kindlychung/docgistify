(function() {
	'use strict';

	var r = /^https:\/\/github\.com\/([^/]+)\/([^/]*)\/.*\/(.*(.adoc|.asciidoc))$/;
	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		var matches = r.exec(details.url);
		if(!matches) {
			return;
		}
		if (matches.length) {
			var newUrl = "http://gist.asciidoctor.org/?github-" + matches[1] + "%2F" + matches[2] + "%2F%2F" + matches[3];
			// console.log('rewriting', details.url, 'to', newUrl);
			chrome.tabs.update(details.tabId, {
				url: newUrl
			});
		}
	})
})();