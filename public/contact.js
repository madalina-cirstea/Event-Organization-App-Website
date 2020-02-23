window.onload = function () {
    var interval;
    var end = 30000;
    var i = 0;

    let contact_img = document.getElementById("contact_img");

    function change_photo() {
        contact_img.setAttribute('src', `./materials/back${i%4}.jpg`)
        i++;
    }
    function startInterval() { interval = setInterval(change_photo, 3000); }
    function stopInterval() { clearInterval(interval); }

    setTimeout(startInterval, 2000);
    setTimeout(stopInterval, end);
}


