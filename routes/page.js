const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const {renderMain} = require('../controllers/page');

const router = express.Router();


// router.get('/profile', isLoggedIn, renderProfile);

// router.get('/join', isNotLoggedIn, renderJoin);

router.get('/', renderMain);

module.exports = router;
