chrome.runtime.sendMessage({
    todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "changeBackground") {
        $('html *').attr('style', 'background: pink');
        // $('div').attr('style', 'background-color: pink !important');
        // $('span').attr('style', 'background-color: pink !important');
    }
})