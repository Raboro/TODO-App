import express from 'express'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.warn(`[SERVER] ${req.method} was called by ${req.path}`)
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.post("/api/:name", (req, res) => {
    res.redirect("http://127.0.0.1:5500/Frontend/html/todo.html");
});