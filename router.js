import express from "express";

const router = express.Router();

const credential = {
    email: "test@gmail.com",
    password: "admin123"
};


router.post('/login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        // res.end("Login Successful")
    }else{
        res.end("Invalid Username, Kindly enter the correct username")
    }
});

// route for dashboard

router.get("/dashboard", (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user:req.session.user})
    } else{
        res.send("Unauthorized User")
    }
})

//route for logout 

router.get('/logout', (req,res) => {
    req.session.destroy(function(err){
        if (err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', { title: "Express", logout: "Logout was Successful!"})
        }
    })
})

export default router;