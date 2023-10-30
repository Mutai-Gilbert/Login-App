import express from "express"

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

//HOME ROUTE
app.get('/', (req, res) => {
    res.render('base', { title: "Login System"});
});

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})