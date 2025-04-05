var canvas = document.querySelector("#unity-canvas");
var mouseLeaveCallback = function(){};
var mouseEnterCallback = function(){};
function setCallbackForMouseLeaveMouseEnterHandler(leaveHandler, enterHandler){
    mouseLeaveCallback = leaveHandler;
    mouseEnterCallback = enterHandler;
}
canvas.addEventListener("mouseleave", (event) =>
{
    // console.warn("mouseleave");
    mouseLeaveCallback();
});
canvas.addEventListener("mouseenter", (event) =>
{
    // console.warn("mouseenter");
    mouseEnterCallback();
});
