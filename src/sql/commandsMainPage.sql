SELECT * FROM tasks WHERE category = ? AND user = ? ORDER BY position ASC; --get tasks from a selected category

INSERT INTO tasks VALUES(NULL,?,?,?,?,?,?,NULL); --create a new task

DELETE FROM tasks WHERE tasks.id = ?; --delete tasks

UPDATE tasks SET position = ? WHERE tasks.id = ?; --change position of a task

UPDATE tasks SET category = ?, position = ? WHERE task.id = ?; --change category and position of task

UPDATE tasks SET category = ?, title = ?, content = ?, dueDate = ?, position = ? WHERE id = ?; --change the whole task