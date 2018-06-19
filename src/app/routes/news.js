const dbConnection = require('../../config/dbConnection')

module.exports = app => {
    const connection = dbConnection()
    
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM news', (err, resut) => {
            console.log(resut)
            res.render('news/news', {
                news: resut
            })
        })
    })

    app.post('/news', (req, res) => {
        const {now_title, now_news} = req.body
        console.log(now_title, now_news)
        if(now_title === undefined || now_news === undefined){
            
        }

        connection.query('INSERT INTO news SET?', {
            title: now_title,
            news: now_news
        }, (err, resut) => {
            res.redirect('/')
        })

    })


}