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
    const rule = constructRule({
        mainBackground: "white",
        heading: "black",
        categoryBorder: "rgba(255, 255, 255, 0.281)",
        categoryBoxShadow: "rgba(131, 131, 131, 0.295)",
        categoryBackground: "rgba(206, 205, 205, 0.24)",
        categoryHeadingBoxShadow: "rgba(146, 126, 126, 0.178)",
        headingTodoBackground: "rgba(128, 128, 128, 0.199)",
        headingTodo: "grey",
        headingInProgressBackground: "rgba(121, 177, 230, 0.329)",
        headingInProgress: "rgb(121, 177, 230)",
        headingDoneBackground: "rgba(126, 228, 126, 0.274)",
        headingDone: "rgba(63, 150, 63, 0.699)",
        addButtonBackground: "rgba(128, 128, 128, 0.144)",
        addButton: "black",
        addButtonHoverBackground: "rgba(128, 128, 128, 0.212)",
        addButtonHoverBoxShadow: "rgba(146, 126, 126, 0.089)"
    });
    stylesheet.insertRule(rule);
}

function switchToDarkTheme(stylesheet) {
    const rule = constructRule({
        mainBackground: "rgba(0, 0, 0, 0.3)",
        heading: "black",
        categoryBorder: "rgba(255, 255, 255, 0.281)",
        categoryBoxShadow: "rgba(131, 131, 131, 0.295)",
        categoryBackground: "rgba(206, 205, 205, 0.24)",
        categoryHeadingBoxShadow: "rgba(146, 126, 126, 0.178)",
        headingTodoBackground: "rgba(128, 128, 128, 0.199)",
        headingTodo: "grey",
        headingInProgressBackground: "rgba(121, 177, 230, 0.329)",
        headingInProgress: "rgb(121, 177, 230)",
        headingDoneBackground: "rgba(126, 228, 126, 0.274)",
        headingDone: "rgba(63, 150, 63, 0.699)",
        addButtonBackground: "rgba(128, 128, 128, 0.144)",
        addButton: "black",
        addButtonHoverBackground: "rgba(128, 128, 128, 0.212)",
        addButtonHoverBoxShadow: "rgba(146, 126, 126, 0.089)"
    });
    stylesheet.insertRule(rule);
}

function constructRule(colors) {
    return ":root {\n" +
        `    --mainBackgroundColor: ${colors.mainBackground};\n` +
        `    --headingColor: ${colors.heading};\n` +
        `    --categoryBorderColor: ${colors.categoryBorder};\n` +
        `    --categoryBoxShadowColor: ${colors.categoryBoxShadow};\n` +
        `    --categoryBackgroundColor: ${colors.categoryBackground};\n` +
        `    --categoryHeadingBoxShadowColor: ${colors.categoryHeadingBoxShadow};\n` +
        `    --headingTodoBackgroundColor: ${colors.headingTodoBackground};\n` +
        `    --headingTodoColor: ${colors.headingTodo};\n` +
        `    --headingInProgressBackgroundColor: ${colors.headingInProgressBackground};\n` +
        `    --headingInProgressColor: ${colors.headingInProgress};\n` +
        `    --headingDoneBackgroundColor: ${colors.headingDoneBackground};\n` +
        `    --headingDoneColor: ${colors.headingDone};\n` +
        `    --addButtonBackgroundColor: ${colors.addButtonBackground};\n` +
        `    --addButtonColor: ${colors.addButton};\n` +
        `    --addButtonHoverBackgroundColor: ${colors.addButtonHoverBackground};\n` +
        `    --addButtonHoverBoxShadowColor: ${colors.addButtonHoverBoxShadow};\n` +
        `}`;
}