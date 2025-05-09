function checkTabletRatio() 
{
    var availWidth = window.screen.availWidth;
    var availHeight = window.screen.availHeight;
    console.log("WindowRatio: (awail) {0} x {1}", availWidth, availHeight);
    var ratioAwail = availWidth / availHeight;
    console.log("WindowRatio: (awail) " + ratioAwail);
    ratioAwail = Math.round(ratioAwail * 100) / 100;
    console.log("WindowRatio: (round): " + ratioAwail);

    var width = window.screen.width;
    var height = window.screen.height;
    console.log("WindowRatio: {0} x {1}", width, height);
    var ratio = width / height;
    console.log("WindowRatio: " + ratio);
    ratio = Math.round(ratio * 100) / 100;
    console.log("WindowRatio: (round): " + ratio);
    
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
    console.log("WindowRatio: (inner) {0} x {1}", innerWidth, innerHeight);
    
    if (ratio >= 0.73 && ratio <= 0.76) 
    {
        console.log("WindowRatio: looks like an Tablet");
        return true;
    }
    else if (ratio >= 2.23 && ratio <= 2.43) 
    {
        console.log("WindowRatio: looks like an Tablet");
        return true;
    }
    else 
    {
        console.log("WindowRatio: looks like an Phone");
        return false;
    }
}
