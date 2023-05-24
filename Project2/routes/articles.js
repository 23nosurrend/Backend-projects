import express from "express"
import bodyParser from "body-parser"
import {createArticles,readArticles,updateArticles,readArticlesLimited,deleteArticles} from "../controllers/articles.js"
import action1 from "../controllers/action.js"
import {essay1,essay2,essay3}  from "../controllers/essay.js"
import {signUp,signIn}from "../controllers/client.js"

const  router=express.Router();
router.use(bodyParser.json())

router.post("/names",createArticles)
router.get("/read/:reqId",readArticles)
// this is read section
router.get("/limit",readArticlesLimited)
////

router.get("/delete/:articleId",deleteArticles)
/////
router.put("/updates/:articleId",updateArticles)
router.post("/action",action1)
//THis section is about essay
router.get("/essay1",essay1)
router.post("/essay2/:age",essay2)
router.delete("/essay3/one",essay3)
// this section is about signUp and signIn
router.post("/signup",signUp)
router.get("/signin",signIn)

export default router;