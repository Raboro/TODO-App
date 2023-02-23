CREATE TABLE users(
    firstName   VARCHAR(32)          NOT NULL,
    lastName    VARCHAR(32)          NOT NULL,
    email       VARCHAR(64)          NOT NULL,
    pwd         VARCHAR(128)         NOT NULL,

    PRIMARY KEY (email)
);

CREATE TABLE categories(
    id          INTEGER             NOT NULL,
    category    VARCHAR(32)         NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE tasks(
    id          INTEGER             PRIMARY KEY AUTO_INCREMENT,
    category    INTEGER             NOT NULL,
    title       VARCHAR(64)         NULL,
    content     VARCHAR(1024)       NULL,
    dueDate     DATE                NULL,
    user        VARCHAR(64)         NOT NULL,
    created     TIMESTAMP           NOT NULL DEFAULT NOW(),


    FOREIGN KEY (user)
    REFERENCES users (eMail)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    FOREIGN KEY (category)
    REFERENCES categories (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);





