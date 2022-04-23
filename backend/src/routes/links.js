const {Router} = require('express');
const router = Router();
const {getLinks,createLink,updateLink,getLink} = require('../controllers/links.controller');
const { validateLink,validateLinkId,validateLinkIdParam } = require('../validators/links');

router.route('/')
.get(getLinks)
.put(validateLinkId,updateLink)
.post(validateLink,createLink);
    
router.route('/:id')
.get(validateLinkIdParam,getLink);

module.exports = router;