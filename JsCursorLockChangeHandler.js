var lockChangeCallback = function(){};
var unlockChangeCallback = function(){};
function setCallbackForLockChangeHandler(lockHandler, unlockHandler){
    lockChangeCallback = lockHandler;
    unlockChangeCallback = unlockHandler;
}
document.addEventListener("pointerlockchange", lockChangeAlert, false);
function lockChangeAlert() {
    console.log("lockChangeAlert:");
    if (document.pointerLockElement === canvas) {
        console.log("The pointer lock status is now locked");
        lockChangeCallback();
    } else {
        console.log("The pointer lock status is now unlocked");
        unlockChangeCallback();
    }
}
function reloadPage() {
    console.log("location.reload(): ");
    location.reload();
}
