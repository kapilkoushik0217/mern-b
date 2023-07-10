const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWIwOGRkMGYxOGU5MjkyMmUyNjRhMCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg5MDE3OTIyfQ.e9c0QxRWCWQmk6ZmehuGFR0m8geWR-9LxQpYocNrcSU"
  return token;
};