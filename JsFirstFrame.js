function firstFrame() {
    console.warn("JsFirstFrame: var loadingScreen = document.querySelector(\"#unity-custom-loading-screen\");");
    var loadingScreen = document.querySelector("#unity-custom-loading-screen");
    console.warn("JsFirstFrame: loadingScreen.style.display = \"none\";");
    loadingScreen.style.display = "none";
    console.warn("JsFirstFrame: loadingScreen disabled.");
}
