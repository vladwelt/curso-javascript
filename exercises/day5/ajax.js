var reqListener = function (data) {
    console.log(data);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://api.randomuser.me/?results=10");
oReq.send();
