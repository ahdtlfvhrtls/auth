import express from "express";
import * as postController from "../controller/post.mjs";
import { body } from "express-validator";
import { validate } from "../middleware/validator.mjs";
import { isAuth } from "../middleware/auth.mjs";

const router = express.Router();

const validatePost = [
  body("text").trim().isLength({ min: 5 }).withMessage("최소 5자이상 입력"),
  validate,
];

// 모든 포스트 가져오기
// 해당 아이디에 대한 포스트 가져오기
// GET
// http://127.0.0.1:8080/posts/
router.get("/", isAuth, postController.getPosts);

export default router;
