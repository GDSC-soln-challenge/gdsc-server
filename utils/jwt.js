const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

module.exports = {
  signAccessToken: (payload) => {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        accessTokenSecret,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            console.log(err.message);
            reject(createError.InternalServerError());
          }
          resolve(token);
        }
      );
    });
  },
  verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, accessTokenSecret, (err, payload) => {
        if (err) {
          const message =
            err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
          reject(createError.Unauthorized(message));
        }
        resolve(payload);
      });
    });
  },

  deleteAccessToken: (token) => {
    return new Promise((resolve, reject) => {
      jwt.destroy(token, (err, payload) => {
        if (err) {
          const message =
            err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
          reject(createError.Unauthorized(message));
        }
        resolve(payload);
      });
    });
  }
};
