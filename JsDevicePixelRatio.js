function getDevicePixelRatio() {
    var result = getDevicePixelRatioIndex();
    console.warn("JsDevicePixelRatio: getDevicePixelRatio: {0}", result);
    return result;
}
