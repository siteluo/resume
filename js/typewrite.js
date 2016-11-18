var typeWriter = (function () {
    var len = 0,
        timer = null;
    var name = document.getElementById("name");
    var msg = "By丶张运涛_siteluo";
    return {
        type: function () {
            name.innerHTML += msg.charAt(len);
            len++;
            timer = setTimeout(typeWriter.type, 200);
            if (len == msg.length) {
                clearTimeout(timer);
            }
        }
    }
})()
window.setTimeout(function () {
    typeWriter.type();
}, 1500)