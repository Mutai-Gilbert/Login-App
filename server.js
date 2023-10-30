import express from "express";
import path from "path"
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))

// load the assets image
app.use('assets', express.static(path.join(__dirname, 'public/assets')))

//HOME ROUTE
app.get('/', (req, res) => {
    res.render('base', { title: "Login System"});
});

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})