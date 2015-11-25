define(['viewObject'], function(viewObject) {
    console.log("viewObject test 1", viewObject === undefined); // returns true
    var event = {};
    event["data"] = {};
    event["data"]["screen"] = "inserted";
    event["data"]["tab"] = 2;
    viewObject.switchScreen(event);
})