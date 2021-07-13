import * as db from "./db/index.js";
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as dotenv from "dotenv";

dotenv.config();
passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async function (jwtPayload, done) {
      return db
        .query("SELECT * FROM users where id = $1 ", [jwtPayload.id])
        .then((user) => {
          return done(null, user.rows[0]);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
