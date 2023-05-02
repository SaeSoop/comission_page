// const { User, Post, Hashtag } = require('../models');


exports.renderMain = async (req, res, next) => {
  try {
    res.render('main');
  } catch (err) {
    console.error(err);
    next(err);
  }
}