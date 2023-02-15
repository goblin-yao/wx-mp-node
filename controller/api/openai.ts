import { Context } from "koa";
import { ChatGPTAPI } from "../../chatgptlib";

// const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });
const api = new ChatGPTAPI({
  apiKey: `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`, // jonas
  // apiKey:`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`, //alex
});

export default {
  async chat(ctx: Context): Promise<void> {
    const question = ctx.request.body.question || "";

    // send a message and wait for the response
    let res: any = {};
    try {
      res = await api.sendMessage(question);
    } catch (error) {
      res.error = error;
    }
    console.log(res);

    // send a follow-up
    // res = await api.sendMessage('Can you expand on that?', {
    //   conversationId: res.conversationId,
    //   parentMessageId: res.id,
    // });
    // console.log(res.text);

    // send another follow-up
    // res = await api.sendMessage('What were we talking about?', {
    //   conversationId: res.conversationId,
    //   parentMessageId: res.id,
    // });
    // console.log(res.text);
    ctx.body = res;
    // const name = ctx.request.body.name || "";
    // const password = ctx.request.body.password || "";
    // const user = {
    //   name: "lucio",
    //   id: 1,
    // };
    // ctx.body = user;
  },
};
