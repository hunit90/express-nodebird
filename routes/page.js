const express = require('express')
const { renderProfile, renderJoin, renderMain } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCounter = 0;
  res.locals.followingCounter = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', renderProfile);
router.get('/join', renderJoin);
router.get('/', renderMain);

module.exports = router;