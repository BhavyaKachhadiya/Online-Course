function myMiddeware(req, res,next) {
    console.log("I am a Middleware");
    next();
}

module.exports = myMiddeware;