function switchTheme() {
    if (isChecked(document.getElementsByClassName("colorSwitch").item(0).childNodes.item(1))) {
        switchToDarkTheme(getStylesheetWithRules());
        return;
    }
    switchToWhiteTheme(getStylesheetWithRules());
}

function getStylesheetWithRules() {
    for (let i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets.item(i).href.endsWith("variables.css")) {
            document.styleSheets.item((i)).deleteRule(0);
            return document.styleSheets.item((i));
        }
    }
}

function switchToWhiteTheme(stylesheet) {
    stylesheet.insertRule(":root {\n" +
        "    --mainBackgroundColor: white;\n" +
        "    --headingColor: black;\n" +
        "    --categoryBorderColor: rgba(255, 255, 255, 0.281);\n" +
        "    --categoryBoxShadowColor: rgba(131, 131, 131, 0.295);\n" +
        "    --categoryBackgroundColor: rgba(206, 205, 205, 0.24);\n" +
        "    --categoryHeadingBoxShadowColor: rgba(146, 126, 126, 0.178);\n" +
        "    --headingTodoBackgroundColor: rgba(128, 128, 128, 0.199);\n" +
        "    --headingTodoColor: grey;\n" +
        "    --headingInProgressBackgroundColor: rgba(121, 177, 230, 0.329);\n" +
        "    --headingInProgressColor: rgb(121, 177, 230);\n" +
        "    --headingDoneBackgroundColor: rgba(126, 228, 126, 0.274);\n" +
        "    --headingDoneColor: rgba(63, 150, 63, 0.699);\n" +
        "    --addButtonBackgroundColor: rgba(128, 128, 128, 0.144);\n" +
        "    --addButtonColor: black;\n" +
        "    --addButtonHoverBackgroundColor: rgba(128, 128, 128, 0.212);\n" +
        "    --addButtonHoverBoxShadowColor: rgba(146, 126, 126, 0.089);\n" +
        "}");
}

function switchToDarkTheme(stylesheet) {
    stylesheet.insertRule(":root {\n" +
        "    --mainBackgroundColor: rgba(0, 0, 0, 0.3);\n" +
        "    --headingColor: black;\n" +
        "    --categoryBorderColor: rgba(255, 255, 255, 0.281);\n" +
        "    --categoryBoxShadowColor: rgba(131, 131, 131, 0.295);\n" +
        "    --categoryBackgroundColor: rgba(206, 205, 205, 0.24);\n" +
        "    --categoryHeadingBoxShadowColor: rgba(146, 126, 126, 0.178);\n" +
        "    --headingTodoBackgroundColor: rgba(128, 128, 128, 0.199);\n" +
        "    --headingTodoColor: grey;\n" +
        "    --headingInProgressBackgroundColor: rgba(121, 177, 230, 0.329);\n" +
        "    --headingInProgressColor: rgb(121, 177, 230);\n" +
        "    --headingDoneBackgroundColor: rgba(126, 228, 126, 0.274);\n" +
        "    --headingDoneColor: rgba(63, 150, 63, 0.699);\n" +
        "    --addButtonBackgroundColor: rgba(128, 128, 128, 0.144);\n" +
        "    --addButtonColor: black;\n" +
        "    --addButtonHoverBackgroundColor: rgba(128, 128, 128, 0.212);\n" +
        "    --addButtonHoverBoxShadowColor: rgba(146, 126, 126, 0.089);\n" +
        "}");
}