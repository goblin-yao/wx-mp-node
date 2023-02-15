import { Context } from "koa";

export default {
  async chat(ctx: Context): Promise<void> {
    await ctx.render("chat");
  },
};
