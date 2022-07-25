const moment = require('moment');
const bcrypt = require('bcrypt');

module.exports = {
  moment,
  // 加密
  genSaltPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (!err) {
            resolve(hash);
          } else {
            reject(err);
          }
        });
      });
    });
  },
};

exports.relativeTime = time => moment(new Date(time)).format('YYYY-MM-DD HH:mm:ss');

