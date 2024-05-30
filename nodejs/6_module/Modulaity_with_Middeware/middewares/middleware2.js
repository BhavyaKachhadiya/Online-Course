function myMiddeware2(req, res,next) {
    console.log("I am a second Middleware");
    next();
}

module.exports = myMiddeware2;