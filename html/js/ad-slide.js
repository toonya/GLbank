// JavaScript source code
var adIndex = 0;
var adTime = null;
var adTimeInterval = 5000;

function initAd() {
    var winWidth = $(".ad-area").width();
    var imgWidth = $(".ad-image").width();
    $(".ad-image").css("margin-left", Math.round((winWidth - imgWidth) / 2) + "px");

    $(".ad-container").eq(0).show().addClass("ad-active");
    $(".ad-navigation .item").eq(0).show().addClass("item-active");
    clearTimeout(adTime);
    adTime = setTimeout(function () { slideAd(); }, adTimeInterval);
    //setInterval(function () { slideAd(); }, adTimeInterval);
}

function slideAd() {
    var $curAd = $(".ad-container").eq(adIndex);
    var $curNav = $(".ad-navigation .item").eq(adIndex);
    getNextIndex();
    var $nextAd = $(".ad-container").eq(adIndex);
    var $nextNav = $(".ad-navigation .item").eq(adIndex);
    $curAd.fadeOut(1000, function () {
        $curAd.removeClass("ad-active");
    });
    $curNav.removeClass("item-active");

    $(".ad-container").eq(adIndex).fadeIn(1000, function () {
        $nextAd.addClass("ad-active");
    });
    $nextNav.addClass("item-active");

    adTime = setTimeout(function () { slideAd(); }, adTimeInterval);
}

function getNextIndex() {
    adIndex++;
    if (adIndex >= $(".ad-container").length) {
        adIndex = 0;
    }
}