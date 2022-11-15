var base = document.getElementById("title").innerHTML;
var arr = [base];
var sw = false;
var len = 1, cur = 0;
while (base.length > 2) {
    base = base.slice(1, base.length - 1);
    arr[len++] = base;
}
function upd() {
    if (cur == 0 || cur == len - 1) sw = !sw;
    if (sw) cur++; else cur--;
    document.getElementById("title").innerHTML = arr[cur];
    document.title = "- " + arr[cur] + " -";
    setTimeout(upd, 500);
}
setTimeout(upd, 1000);
