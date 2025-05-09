function setDevicePixelRatio(devicePixelRatio) {
    console.warn("JsDevicePixelRatio: setDevicePixelRatio: {0}", devicePixelRatio);
    setDevicePixelRatioIndex(devicePixelRatio);
}
function getDevicePixelRatio() {
    var result = getDevicePixelRatioIndex();
    console.warn("JsDevicePixelRatio: getDevicePixelRatio: {0}", result);
    return result;
}
