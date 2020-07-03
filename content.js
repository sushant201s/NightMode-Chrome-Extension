chrome.runtime.sendMessage({
    todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "changeBackground") {
    //    $('body').attr('style', 'background-color: black');
    //    $('body').attr('style', 'color: white');
       $("body div").css("background-color", "black");
       $("html *").css("color", "white");
       
    //    $("body div").css("color", "white");
    //    $("body span").css("color", "white");
    //    $("body cite").css("color", "white");
    //    $("body a").css("color", "white");
       
        // $('span').attr('style', 'background-color: pink !important');
    }
})