class NewsController {
  // [GET] /news
  index (req, res) {
    res.render('news')
  }

  // [GET] /news/detail
  show (req, res) {
    res.send('News detail')
  }
}

module.exports = new NewsController