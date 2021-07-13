import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import * as db from "./db/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import passport from "passport";
dotenv.config();
import "./passport-config.js";

const app = express();
app.use(express.json());
app.use(cors());

// ADD USER

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);

    const result = await db.query(
      "INSERT INTO users (name, email, password) values ($1, $2, $3) returning *",
      [name, email, bcrypt.hashSync(password, salt)]
    );
    return res.status(201).json({
      data: {
        user: result.rows[0],
      },
    });
  } catch (err) {
    return res.status(400).json(err.message);
    console.log(err);
  }
});

// GET ALL Users

app.get(
  "/api/user",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      return res.json(req.user);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err.message);
    }
  }
);

// LOGIN

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const results = await db.query("SELECT * FROM users where email = $1", [
      email,
    ]);

    const userWithEmail = results.rows[0];
    if (!userWithEmail) {
      return res.json({ message: "Email doesn't Match" });
    }
    if (!bcrypt.compareSync(password, userWithEmail.password)) {
      return res.json({ message: "incorrect password" });
    } else {
      const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email },
        process.env.JWT_SECRET
      );
      return res.json({ token: jwtToken });
    }
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
});

// GET ALL PROJECTS
app.get(
  "/api/projects",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const results = await db.query("SELECT * FROM projects");
      return res.status(200).json({
        data: {
          projects: results.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);

// GET A PROJECT
app.get(
  "/api/projects/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const results = await db.query(
        `SELECT * FROM projects where id = ${req.params.id}`
      );
      return res.status(200).json({
        data: {
          project: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);

// SEND A REQUEST

app.post(
  "/api/projects/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { request } = req.body;
    const userId = req.user.id;
    try {
      const results = await db.query(
        "INSERT INTO requests (userID , projectID , request ) values ($1 , $2 , $3 ) returning *",
        [userId, req.params.id, request]
      );
      return res.status(200).json({
        data: {
          request: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);

const port = process.env.PORT || 3050;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
