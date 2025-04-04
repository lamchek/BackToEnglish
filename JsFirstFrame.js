function firstFrame() {
    console.warn("firstFrame: var loadingScreen = document.querySelector(\"#unity-custom-loading-screen\");");
    var loadingScreen = document.querySelector("#unity-custom-loading-screen");
    console.warn("firstFrame: loadingScreen.style.display = \"none\";");
    loadingScreen.style.display = "none";
}
