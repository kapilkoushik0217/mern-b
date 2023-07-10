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
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWMxMjljYTlkOTZhMDYwOTExODQ3NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg4OTk4NTU3fQ.-JV32Sd-XOoEfeTnSCnGur0g_CIDf3Ro6XWMu6aGGR0"
  return token;
};