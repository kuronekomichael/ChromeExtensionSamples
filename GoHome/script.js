chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    document.body.innerHTML += '<audio id="se" preload="auto"><source src="http://www.soundoffice.com/se/se_mp3/se-053a.mp3" type="audio/mp3"></audio>';
    document.body.innerHTML += '<div id="endroll" style="position:absolute;width:9999px;background-color:white;opacity:0.1;top:0;height:5000px;-webkit-transition: opacity 20s linear;z-index:9999"></div>';

    setTimeout(function(){
        document.getElementById('se').play();
        document.getElementById('endroll').style.opacity = '1.0';
    }, 100);

});
