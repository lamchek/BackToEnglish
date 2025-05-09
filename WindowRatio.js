function checkTabletRatio() 
{
    var availWidth = window.screen.availWidth;
    var avaiHeight = window.screen.availHeight;
    console.log("WindowRatio: {0} x {1}", availWidth, avaiHeight);
    var ratio = availWidth / availHeight;
    console.log("WindowRatio: " + ratio);
    ratio = Math.round(ratio * 100) / 100;
    console.log("WindowRatio: (round): " + ratio);
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
