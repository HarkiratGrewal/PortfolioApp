let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { 
    title: 'Express Demo',
    details: 
    [
      'Street Science',
      'Dark Matters: Twisted But True',
      'Amazing Spiderman'
    ]
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'About Express',
    author: 'Harkirat Singh Grewal',
    paragraphs: 
    [
      'I am a future software, I look forward to get hired by some good companies. This is my first portolio website. Hope you like the content.',
      'Considering my course the subject I excel are C# programming, web development which include html, css and javascript.',
      'I am very dedicated to my goal and I would achieve it soon.'
    ]

 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact Me',
    authors: ['Harkirat','Tom', 'Mark', 'Luke', 'Jaden', 'John']
 });
});

/* GET about page. */
router.get('/achievements', function(req, res, next) {
  res.render('content/achievements', { 
    title: 'Achievements Express',
    author: 'Harkirat Singh Grewal'
 });
});

module.exports = router;
