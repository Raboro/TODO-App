SELECT * FROM tasks WHERE category = ? AND user = ? ORDER BY tasks.dueDate ASC; --get tasks from a selected category ordered by dueDate

INSERT INTO tasks VALUES(NULL,?,?,?,?,?,?,NULL); --create a new task

DELETE FROM tasks WHERE tasks.id = ?; --delete tasks

UPDATE tasks SET category = ? WHERE task.id = ?; --change category of task

SELECT id FROM tasks WHERE user = ? ORDER BY created DESC LIMIT 1 --get id from latest task from user