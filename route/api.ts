import Router from 'koa-router';
import openAIController from '../controller/api/openai';

const router = new Router();

router.post('/chat', openAIController.chat);

export default router;
