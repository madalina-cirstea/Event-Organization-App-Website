window.onload = function () {
    var newWindow;

    function openWin() {
        myWindow = window.open("https://sites.google.com/site/fmitehniciweb/", "_blank", "top=100, left=200, height=400, width=900, toolbar=no");
    }

    let terms = document.getElementById('terms');
    terms.onclick = function () {
        openWin();
    }
}