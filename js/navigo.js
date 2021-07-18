var root = null;
var useHash = true; // Defaults to: false
var hash = "#"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
    .on("/register", function () {
        document.getElementById("app").innerHTML =
            "<register-form></register-form>";
    })
    .resolve();

router
    .on("/login", function () {
        document.getElementById("app").innerHTML = "<login-form></login-form>";
    })
    .resolve();

router
    .on("/dic", function () {
        document.getElementById("app").innerHTML =
            "<dic-container></dic-container>";
    })
    .resolve();

router
    .on("/listening", function () {
        document.getElementById("app").innerHTML =
            "<listening-container></listening-container>";
    })
    .resolve();
router
    .on("/reading", function () {
        document.getElementById("app").innerHTML =
            "<read-container></read-container>";
    })
    .resolve();
router
    .on("/writting", function () {
        document.getElementById("app").innerHTML =
            "<write-container></write-container>";
    })
    .resolve();
router
    .on("/headerTag", function () {
        document.getElementById("app").innerHTML = "<header-tag></header-tag>";
    })
    .resolve();
router
    .on("/speakContainer", function () {
        document.getElementById("app").innerHTML =
            "<speak-container></speak-container>";
    })
    .resolve();

router
    .on("/flashCard", function () {
        document.getElementById("app").innerHTML =
            "<flash-container></flash-container>";
    })
    .resolve();

router

    .on("/homeScreen", function () {
        let currentUser = firebase.auth().currentUser;
        if (currentUser == null) {
            router.navigate("/login");
        }
        document.getElementById("app").innerHTML =
            "<home-screen></home-screen> ";
    })
    .resolve();
router
    .on("/comment", function () {
        document.getElementById("app").innerHTML =
            "<comment-page></comment-page>";
    })
    .resolve();
window.router = router;
