$('#activate').click(function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            todo: "changeBackground"
        });
    });
    $('body').css("background-color", "red");
});