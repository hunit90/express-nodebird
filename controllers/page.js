exports.renderProfile = (req, res) => {
  res.render('profile', { title: 'my Information - NodeBird' });
};

exports.renderJoin = (req, res) => {
  res.render('join', {title: 'sign up - NodeBird' });
};

exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits,
  });
};