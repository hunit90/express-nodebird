const express = require('express')
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { renderProfile, renderJoin, renderMain, renderHashtag, } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCounter = req.user?.Followers?.length || 0;
  res.locals.followingCounter = req.user?.Followings?.length || 0;
  res.locals.followingIdList = req.user?.Followings?.map(f=> f.id) || [];
  next();
});

router.get('/hashtag', renderHashtag);
router.get('/profile', isLoggedIn, renderProfile);
router.get('/join', isNotLoggedIn, renderJoin);
router.get('/', renderMain);

module.exports = router;