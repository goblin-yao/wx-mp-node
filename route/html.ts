import Router from "koa-router";
import indexController from "../controller/html/index";
import chatController from "../controller/html/chat";

const router = new Router();

router.get("/index", indexController.index);
router.get("/chat", chatController.chat);
// router.get("/signin", signController.signin);
// router.get("/signin-ok", signController.signinOk);
// router.get("/signin-failed", signController.signinFailed);

export default router;
