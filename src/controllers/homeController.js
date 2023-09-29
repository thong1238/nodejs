const home = (req, res)=>{
    return res.render('home.ejs');
}
const guess = (req, res)=>{
    return res.render('guess.ejs');
}

module.exports = {home, guess}