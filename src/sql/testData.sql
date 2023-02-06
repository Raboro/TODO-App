INSERT INTO users VALUES("Max","Mueller","max.mueller@email.de","$2a$12$qzN0Vs5LtQ0qKioqKRg47.KHtmjK7xsSU.Ui2unrxVxqxJbKOw0li"); --5678
INSERT INTO users VALUES("Achim","Achim","achim@achim.com","$2a$12$NbZlJTxqqNDDYpL1OaKqVeURotC2zVhPqxaVjY.aZ/mrw4ppf/.IS"); --123456

INSERT INTO categories VALUES(1,"TODO");
INSERT INTO categories VALUES(2,"IN PROGRESS");
INSERT INTO categories VALUES(3,"DONE");

INSERT INTO tasks VALUES(NULL,2,"Einkaufen","Mittagessen und Abendessen fuer zwei Tage","2023-02-04","max.mueller@email.de",1,NULL);
INSERT INTO tasks VALUES(NULL,1,"Tierarzt","Medikamente für Corgi abholen","2023-02-15","achim@achim.com",1,NULL);
INSERT INTO tasks VALUES(NULL,1,"Mathe lernen","Gruppen, Ringe und den anderen Sch***","2023-03-31","max.mueller@email.de",3,NULL);
INSERT INTO tasks VALUES(NULL,3,"Bewerbung schreiben","Lebenslauf inkl. Motivationsschreiben","2023-01-10","max.mueller@email.de",2,NULL);
INSERT INTO tasks VALUES(NULL,3,"alten Job kündigen","E-Mail schreiben inkl. Abschlussparty planen.","2022-12-01","max.mueller@email.de",4,NULL);