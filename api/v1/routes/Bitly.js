const router = require('express').Router();

const { createShortLink, getAllLinks, getLinkByShortUrl } = require('../controllers/Bitly');

router.post('/shorten', createShortLink);
router.get('/short/:shortLink', getLinkByShortUrl);
router.get('/links', getAllLinks);
module.exports = router;