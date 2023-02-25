# Kanban - Web Engineering I Project

> ## Authors:
> [Manuel Franz](https://github.com/Manuel-F-04),  [Janik Piehler](https://github.com/janikpiehler), [Lukas Schulz](https://github.com/lukas-ms), [Marius Wörfel](https://github.com/Raboro)

## Instruction guide
1. Install [node.js](https://nodejs.org/en/download/)
2. Clone code 
3. Add a ```.env``` file, which contains all "secret data" about the server connection etc.
4. After collecting the sourcecode load all dependencies with:

```bash 
$ npm install
```
5. To run the code / Server:

```bash
$ npm run dev
```

## Project structure

>├── .github/ <br>
│   ├── workflows/ <br>
├── node_modules/ <br>
├── src/ <br>
│   ├── controllers/ <br>
│   ├── middleware/ <br>
│   ├── public/ <br>
│   ├── routes/ <br>
│   ├── services/ <br>
│   ├── sql/ <br>
│   └── app.js <br>
├── .env <br>
├── .eslintrc.json <br>
├── .gitignore <br>
├── package.json <br> 
├── package-lock.json <br>
└── README.md 