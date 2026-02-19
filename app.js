import express from 'express';
const app = express();

app.set('view engine', 'ejs');

const PORT = 3002;

app.get('/', (req, res) => {
    let user = {
        name: "Yousif",
        color: "purple",
        food: "pizza",
        grade: 1.9,
        age: 21

    }
    res.render('home', { user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

