function showLoader() {
    console.warn("JsLoaderBar: var loaderBar = document.querySelector(\"#unity-custom-loader-bar\");");
    var loaderBar = document.querySelector("#unity-custom-loader-bar");
    console.warn("JsLoaderBar: loaderBar.style.display = \"block\";");
    loaderBar.style.display = "block";
    console.warn("JsLoaderBar: loaderBar disabled.");
}
function hideLoader() {
    console.warn("JsLoaderBar: var loaderBar = document.querySelector(\"#unity-custom-loader-bar\");");
    var loaderBar = document.querySelector("#unity-custom-loader-bar");
    console.warn("JsLoaderBar: loaderBar.style.display = \"none\";");
    loaderBar.style.display = "none";
    console.warn("JsLoaderBar: loaderBar disabled.");
}
