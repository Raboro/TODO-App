CREATE TABLE User(
    Vorname            VARCHAR(32)          NOT NULL,
    Nachname               VARCHAR(32)          NOT NULL,
    EMail              VARCHAR(64)          NOT NULL,
    Passwort           VARCHAR(128)         NOT NULL,

    PRIMARY KEY (EMail)
);

CREATE TABLE Task(
    TaskID              Integer             NOT NULL,
    Category            Char(16)            NOT NULL,
    Title               VARCHAR(64)         NULL,
    Description         VARCHAR(1024)       NULL,
    DueDate             DATE                NULL,
    User                VARCHAR(64)         NOT NULL,

    PRIMARY KEY (TaskID, User),

    FOREIGN KEY (User)
    REFERENCES User (EMail)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);



