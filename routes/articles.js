const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new',(req,res) =>{
    res.render('articles/new')
})

router.post('/', async(req,res) =>{
    const artilce = new Article({
        title: req.body.title,
        description : req.bddy.description,
        markdown : req.body.markdown
})
  await article.save()



})




module.exports = router