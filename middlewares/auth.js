const jwt = require("../utils/jwt");
const createError = require("http-errors");
const prisma = require("../database/dbClient");

const auth =
  (...roles) =>
  async (req, res, next) => {
    if (!req.headers.authorization) {
      return next(createError.Unauthorized());
    }
    const authHeader = req.headers.authorization;
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    try {
      const payload = await jwt.verifyAccessToken(token);
      req.user = payload;
      const user = await prisma.user.findUnique({
        where: {
          id: payload.id,
        },
      });
      if (!user) {
        return next(createError.Unauthorized());
      }
      if (!roles.includes(user.role)) {
        return next(createError.Forbidden());
      }
      next();
    } catch (e) {
      return next(createError.Unauthorized());
    }
  };

module.exports = auth;
