
// タブが更新された時にもTweetボタンを表示させる
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.pageAction.show(tab.id);
});

// 全ウィンドウの全タブに、Tweetボタンを表示させる
chrome.windows.getAll({populate: true}, function(windows) {
	windows.forEach(function(window) {
		window.tabs.forEach(function(tab) {
			chrome.pageAction.show(tab.id);
		});
	});
});

chrome.pageAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: "http://twitter.com/intent/tweet?text=投稿する文章&url=" + encodeURI(tab.url)
    });
});
