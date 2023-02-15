const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const path = require("path");
const { init: initDB, Counter } = require("./db");
const router = new Router();
const homePage = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
router.get("/", async (ctx) => {
    ctx.body = homePage;
});
router.post("/api/count", async (ctx) => {
    const { request } = ctx;
    const { action } = request.body;
    if (action === "inc") {
        await Counter.create();
    }
    else if (action === "clear") {
        await Counter.destroy({
            truncate: true,
        });
    }
    ctx.body = {
        code: 0,
        data: await Counter.count(),
    };
});
router.get("/api/count", async (ctx) => {
    const result = await Counter.count();
    ctx.body = {
        code: 0,
        data: result,
    };
});
router.get("/api/wx_openid", async (ctx) => {
    if (ctx.request.headers["x-wx-source"]) {
        ctx.body = ctx.request.headers["x-wx-openid"];
    }
});
const app = new Koa();
app
    .use(logger())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());
const port = process.env.PORT || 80;
async function bootstrap() {
    await initDB();
    app.listen(port, () => {
        console.log("启动成功", port);
    });
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9vcmlnaW5fZGVtby9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM3QyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDeEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ2xCLE1BQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCO1NBQ0ksSUFBSSxNQUFNLEtBQUssT0FBTyxFQUFFO1FBQ3pCLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7S0FDTjtJQUNELEdBQUcsQ0FBQyxJQUFJLEdBQUc7UUFDUCxJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUU7S0FDOUIsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ25DLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7UUFDUCxJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2YsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdkMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNwQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUc7S0FDRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDYixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDakIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDbEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3BDLEtBQUssVUFBVSxTQUFTO0lBQ3BCLE1BQU0sTUFBTSxFQUFFLENBQUM7SUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLb2EgPSByZXF1aXJlKFwia29hXCIpO1xuY29uc3QgUm91dGVyID0gcmVxdWlyZShcImtvYS1yb3V0ZXJcIik7XG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKFwia29hLWxvZ2dlclwiKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwia29hLWJvZHlwYXJzZXJcIik7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IHsgaW5pdDogaW5pdERCLCBDb3VudGVyIH0gPSByZXF1aXJlKFwiLi9kYlwiKTtcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbmNvbnN0IGhvbWVQYWdlID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSwgXCJ1dGYtOFwiKTtcbnJvdXRlci5nZXQoXCIvXCIsIGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHguYm9keSA9IGhvbWVQYWdlO1xufSk7XG5yb3V0ZXIucG9zdChcIi9hcGkvY291bnRcIiwgYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gY3R4O1xuICAgIGNvbnN0IHsgYWN0aW9uIH0gPSByZXF1ZXN0LmJvZHk7XG4gICAgaWYgKGFjdGlvbiA9PT0gXCJpbmNcIikge1xuICAgICAgICBhd2FpdCBDb3VudGVyLmNyZWF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChhY3Rpb24gPT09IFwiY2xlYXJcIikge1xuICAgICAgICBhd2FpdCBDb3VudGVyLmRlc3Ryb3koe1xuICAgICAgICAgICAgdHJ1bmNhdGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogMCxcbiAgICAgICAgZGF0YTogYXdhaXQgQ291bnRlci5jb3VudCgpLFxuICAgIH07XG59KTtcbnJvdXRlci5nZXQoXCIvYXBpL2NvdW50XCIsIGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBDb3VudGVyLmNvdW50KCk7XG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICB9O1xufSk7XG5yb3V0ZXIuZ2V0KFwiL2FwaS93eF9vcGVuaWRcIiwgYXN5bmMgKGN0eCkgPT4ge1xuICAgIGlmIChjdHgucmVxdWVzdC5oZWFkZXJzW1wieC13eC1zb3VyY2VcIl0pIHtcbiAgICAgICAgY3R4LmJvZHkgPSBjdHgucmVxdWVzdC5oZWFkZXJzW1wieC13eC1vcGVuaWRcIl07XG4gICAgfVxufSk7XG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5hcHBcbiAgICAudXNlKGxvZ2dlcigpKVxuICAgIC51c2UoYm9keVBhcnNlcigpKVxuICAgIC51c2Uocm91dGVyLnJvdXRlcygpKVxuICAgIC51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA7XG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgYXdhaXQgaW5pdERCKCk7XG4gICAgYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ZCv5Yqo5oiQ5YqfXCIsIHBvcnQpO1xuICAgIH0pO1xufVxuYm9vdHN0cmFwKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXZjbWxuYVc1ZlpHVnRieTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZETTBJc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTNKRExFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOeVF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0QlFVTTNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRla0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRemRDTEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVWc1JDeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRTFCUVUwc1JVRkJSU3hEUVVGRE8wRkJSVFZDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1dVRkJXU3hEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdRVUZIT1VVc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8wbEJRelZDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRM1JDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUjBnc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8wbEJRM1JETEUxQlFVMHNSVUZCUlN4UFFVRlBMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGVFSXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEYUVNc1NVRkJTU3hOUVVGTkxFdEJRVXNzUzBGQlN5eEZRVUZGTzFGQlEzQkNMRTFCUVUwc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzB0QlEzaENPMU5CUVUwc1NVRkJTU3hOUVVGTkxFdEJRVXNzVDBGQlR5eEZRVUZGTzFGQlF6ZENMRTFCUVUwc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU53UWl4UlFVRlJMRVZCUVVVc1NVRkJTVHRUUVVObUxFTkJRVU1zUTBGQlF6dExRVU5LTzBsQlJVUXNSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSenRSUVVOVUxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRTFCUVUwc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJUdExRVU0xUWl4RFFVRkRPMEZCUTBvc1EwRkJReXhEUVVGRExFTkJRVU03UVVGSFNDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdTVUZEY2tNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkZja01zUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnp0UlFVTlVMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMUFzU1VGQlNTeEZRVUZGTEUxQlFVMDdTMEZEWWl4RFFVRkRPMEZCUTBvc1EwRkJReXhEUVVGRExFTkJRVU03UVVGSFNDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRKUVVONlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTzFGQlEzUkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03UzBGREwwTTdRVUZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVWSUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzUjBGQlJ6dExRVU5CTEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRMUVVOaUxFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0TFFVTnFRaXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMHRCUTNCQ0xFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVWb1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdRVUZEY0VNc1MwRkJTeXhWUVVGVkxGTkJRVk03U1VGRGRFSXNUVUZCVFN4TlFVRk5MRVZCUVVVc1EwRkJRenRKUVVObUxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRSUVVOd1FpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOTUxFTkJRVU03UVVGRFJDeFRRVUZUTEVWQlFVVXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUV0dllTQTlJSEpsY1hWcGNtVW9YQ0pyYjJGY0lpazdYRzVqYjI1emRDQlNiM1YwWlhJZ1BTQnlaWEYxYVhKbEtGd2lhMjloTFhKdmRYUmxjbHdpS1R0Y2JtTnZibk4wSUd4dloyZGxjaUE5SUhKbGNYVnBjbVVvWENKcmIyRXRiRzluWjJWeVhDSXBPMXh1WTI5dWMzUWdZbTlrZVZCaGNuTmxjaUE5SUhKbGNYVnBjbVVvWENKcmIyRXRZbTlrZVhCaGNuTmxjbHdpS1R0Y2JtTnZibk4wSUdaeklEMGdjbVZ4ZFdseVpTaGNJbVp6WENJcE8xeHVZMjl1YzNRZ2NHRjBhQ0E5SUhKbGNYVnBjbVVvWENKd1lYUm9YQ0lwTzF4dVkyOXVjM1FnZXlCcGJtbDBPaUJwYm1sMFJFSXNJRU52ZFc1MFpYSWdmU0E5SUhKbGNYVnBjbVVvWENJdUwyUmlYQ0lwTzF4dVhHNWpiMjV6ZENCeWIzVjBaWElnUFNCdVpYY2dVbTkxZEdWeUtDazdYRzVjYm1OdmJuTjBJR2h2YldWUVlXZGxJRDBnWm5NdWNtVmhaRVpwYkdWVGVXNWpLSEJoZEdndWFtOXBiaWhmWDJScGNtNWhiV1VzSUZ3aWFXNWtaWGd1YUhSdGJGd2lLU3dnWENKMWRHWXRPRndpS1R0Y2JseHVMeThnNmFhVzZhRzFYRzV5YjNWMFpYSXVaMlYwS0Z3aUwxd2lMQ0JoYzNsdVl5QW9ZM1I0S1NBOVBpQjdYRzRnSUdOMGVDNWliMlI1SUQwZ2FHOXRaVkJoWjJVN1hHNTlLVHRjYmx4dUx5OGc1cHUwNXBhdzZLNmg1cFd3WEc1eWIzVjBaWEl1Y0c5emRDaGNJaTloY0drdlkyOTFiblJjSWl3Z1lYTjVibU1nS0dOMGVDa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lISmxjWFZsYzNRZ2ZTQTlJR04wZUR0Y2JpQWdZMjl1YzNRZ2V5QmhZM1JwYjI0Z2ZTQTlJSEpsY1hWbGMzUXVZbTlrZVR0Y2JpQWdhV1lnS0dGamRHbHZiaUE5UFQwZ1hDSnBibU5jSWlrZ2UxeHVJQ0FnSUdGM1lXbDBJRU52ZFc1MFpYSXVZM0psWVhSbEtDazdYRzRnSUgwZ1pXeHpaU0JwWmlBb1lXTjBhVzl1SUQwOVBTQmNJbU5zWldGeVhDSXBJSHRjYmlBZ0lDQmhkMkZwZENCRGIzVnVkR1Z5TG1SbGMzUnliM2tvZTF4dUlDQWdJQ0FnZEhKMWJtTmhkR1U2SUhSeWRXVXNYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0JqZEhndVltOWtlU0E5SUh0Y2JpQWdJQ0JqYjJSbE9pQXdMRnh1SUNBZ0lHUmhkR0U2SUdGM1lXbDBJRU52ZFc1MFpYSXVZMjkxYm5Rb0tTeGNiaUFnZlR0Y2JuMHBPMXh1WEc0dkx5RG9qcmZsajVib3JxSG1sYkJjYm5KdmRYUmxjaTVuWlhRb1hDSXZZWEJwTDJOdmRXNTBYQ0lzSUdGemVXNWpJQ2hqZEhncElEMCtJSHRjYmlBZ1kyOXVjM1FnY21WemRXeDBJRDBnWVhkaGFYUWdRMjkxYm5SbGNpNWpiM1Z1ZENncE8xeHVYRzRnSUdOMGVDNWliMlI1SUQwZ2UxeHVJQ0FnSUdOdlpHVTZJREFzWEc0Z0lDQWdaR0YwWVRvZ2NtVnpkV3gwTEZ4dUlDQjlPMXh1ZlNrN1hHNWNiaTh2SU9Xd2orZW9pK1c2aitpd2crZVVxTys4ak9pT3QrV1BsdVcrcnVTL29TQlBjR1Z1SUVsRVhHNXliM1YwWlhJdVoyVjBLRndpTDJGd2FTOTNlRjl2Y0dWdWFXUmNJaXdnWVhONWJtTWdLR04wZUNrZ1BUNGdlMXh1SUNCcFppQW9ZM1I0TG5KbGNYVmxjM1F1YUdWaFpHVnljMXRjSW5ndGQzZ3RjMjkxY21ObFhDSmRLU0I3WEc0Z0lDQWdZM1I0TG1KdlpIa2dQU0JqZEhndWNtVnhkV1Z6ZEM1b1pXRmtaWEp6VzF3aWVDMTNlQzF2Y0dWdWFXUmNJbDA3WEc0Z0lIMWNibjBwTzF4dVhHNWpiMjV6ZENCaGNIQWdQU0J1WlhjZ1MyOWhLQ2s3WEc1aGNIQmNiaUFnTG5WelpTaHNiMmRuWlhJb0tTbGNiaUFnTG5WelpTaGliMlI1VUdGeWMyVnlLQ2twWEc0Z0lDNTFjMlVvY205MWRHVnlMbkp2ZFhSbGN5Z3BLVnh1SUNBdWRYTmxLSEp2ZFhSbGNpNWhiR3h2ZDJWa1RXVjBhRzlrY3lncEtUdGNibHh1WTI5dWMzUWdjRzl5ZENBOUlIQnliMk5sYzNNdVpXNTJMbEJQVWxRZ2ZId2dPREE3WEc1aGMzbHVZeUJtZFc1amRHbHZiaUJpYjI5MGMzUnlZWEFvS1NCN1hHNGdJR0YzWVdsMElHbHVhWFJFUWlncE8xeHVJQ0JoY0hBdWJHbHpkR1Z1S0hCdmNuUXNJQ2dwSUQwK0lIdGNiaUFnSUNCamIyNXpiMnhsTG14dlp5aGNJdVdRcitXS3FPYUlrT1dLbjF3aUxDQndiM0owS1R0Y2JpQWdmU2s3WEc1OVhHNWliMjkwYzNSeVlYQW9LVHRjYmlKZGZRPT0iXX0=