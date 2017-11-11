const express = require('express')
const redir = require('./redirect.json')
const path = require('path')
const app = new express()

app.use( express.static( __dirname ));

app.get('/:short', (req, res) => {
    for(item in redir) {
        if(req.params.short == item) res.redirect(redir[item])
        if(req.params.short !== item) res.sendFile(path.join(__dirname + '/404.html'))
    }
})

app.listen(1337, () => {
    console.log('listening')
})