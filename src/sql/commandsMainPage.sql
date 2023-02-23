--SELECT * FROM tasks WHERE category = ? AND user = ? ORDER BY position ASC; --get tasks from a selected category ordered by position
SELECT * FROM tasks WHERE category = ? AND user = ? ORDER BY tasks.created ASC; --get tasks from a selected category ordered by creation

INSERT INTO tasks VALUES(NULL,?,?,?,?,?,?,NULL); --create a new task

DELETE FROM tasks WHERE tasks.id = ?; --delete tasks

--UPDATE tasks SET position = ? WHERE tasks.id = ?; --change position of a task

--UPDATE tasks SET category = ?, position = ? WHERE task.id = ?; --change category and position of task
UPDATE tasks SET category = ? WHERE task.id = ?; --change category of task

SELECT id FROM tasks WHERE user = ? ORDER BY created DESC LIMIT 1 --get id from latest task from user