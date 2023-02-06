--Button SignIn
SELECT email FROM users WHERE email = ? AND pwd = ?; 

--Button SignUp
SELECT email FROM users WHERE email = ?; --check for an unique email adress
INSERT INTO users VALUES(?,?,?,?); --create new user
