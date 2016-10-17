var b = document.getElementsByClassName("box")[0];
var c = document.getElementsByClassName("box")[1];
var d = document.getElementsByClassName("box")[2];
var a = document.getElementsByClassName("box")[3];
var e = document.getElementsByClassName("box")[4];

var f = document.getElementsByClassName("box")[5];
var g = document.getElementsByClassName("box")[6];
var h = document.getElementsByClassName("box")[7];
var i = document.getElementsByClassName("box")[8];
var j = document.getElementsByClassName("box")[9];

var p = document.getElementsByClassName("box")[10];
var r = document.getElementsByClassName("box")[11];
var s = document.getElementsByClassName("box")[12];
var t = document.getElementsByClassName("box")[13];

var k = document.getElementsByClassName("box")[14];
var l = document.getElementsByClassName("box")[15];
var m = document.getElementsByClassName("box")[16];
var n = document.getElementsByClassName("box")[17];
var o = document.getElementsByClassName("box")[18];


b.addEventListener("mouseover", picIn);
b.addEventListener("mouseout", picOut);
c.addEventListener("mouseover", picZoom);
c.addEventListener("mouseout", picOut);
d.addEventListener("click", zoomIn);
d.addEventListener("dblclick", zoomOut);
a.addEventListener("mousedown", picDown);
a.addEventListener("mouseup", picUp);
e.addEventListener("mousedown", picRight);
e.addEventListener("mouseup", picLeft);

f.addEventListener("mouseover", picIn);
f.addEventListener("mouseout", picOut);
g.addEventListener("mouseover", picZoom);
g.addEventListener("mouseout", picOut);
j.addEventListener("click", picZoom);
j.addEventListener("dblclick", picOut);
i.addEventListener("mousedown", picDown);
i.addEventListener("mouseup", picUp);
h.addEventListener("mousedown", picDown);
h.addEventListener("mouseup", picUp);

p.addEventListener("mousedown", picRight);
p.addEventListener("mouseup", picLeft);
r.addEventListener("mouseover", picIn);
r.addEventListener("mouseout", picOut);
s.addEventListener("mouseover", picZoom);
s.addEventListener("mouseout", picOut);
t.addEventListener("click", zoomIn);
t.addEventListener("dblclick", zoomOut);

k.addEventListener("mouseover", textZoom);
k.addEventListener("mouseout", textZoomOut);
l.addEventListener("mouseover", textZoom);
l.addEventListener("mouseout", textZoomOut);
m.addEventListener("mouseover", textZoom);
m.addEventListener("mouseout", textZoomOut);
n.addEventListener("mouseover", textZoom);
n.addEventListener("mouseout", textZoomOut);
o.addEventListener("mouseover", textZoom);
o.addEventListener("mouseout", textZoomOut);

function picIn(){
    event.target.style.background = "url(../images/ai-weiwei-1.jpg) no-repeat center center";
    event.target.style.backgroundSize = "cover";
}

function picZoom(){
    event.target.style.backgroundSize = "350px";
}

function picOut(){
    event.target.style.background = "";
}

function zoomIn(b, c, d){
    event.target.style.width = "150px";
}
function zoomOut(){
    event.target.style.width = "";   
}

function picDown(){
    event.target.style.marginTop = "200px";
}

function picUp(){
    event.target.style.marginTop = "";
}

function picRight(){
    event.target.style.marginLeft = "-250px"
}
function picLeft(){
    event.target.style.marginLeft = ""
}

function textZoom(){
    event.target.style.fontSize = "1.5em";
    event.target.style.width = "300px";
    event.target.style.backgroundColor = "white";
}

function textZoomOut(){
    event.target.style.fontSize = "";
    event.target.style.width = "";
}