"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const koa_views_1 = __importDefault(require("koa-views"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const route_1 = __importDefault(require("./route"));
const path_1 = __importDefault(require("path"));
const app = new koa_1.default();
app.use((0, koa_body_1.default)());
app.use((0, koa_views_1.default)(path_1.default.join(__dirname, "./views"), {
    extension: "ejs",
}));
app.use((0, koa_logger_1.default)());
app.use((0, koa_static_1.default)(path_1.default.join(__dirname, "./public"), {
    maxAge: 30 * 24 * 60 * 60 * 1000,
}));
app.use(route_1.default.routes()).use(route_1.default.allowedMethods());
const port = process.env.PORT || 80;
app.listen(port);
console.log(`app started at port ${port}...`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXNCO0FBQ3RCLHdEQUErQjtBQUMvQiwwREFBaUM7QUFDakMsNERBQW1DO0FBQ25DLDREQUFtQztBQUNuQyxvREFBNkI7QUFDN0IsZ0RBQXdCO0FBRXhCLE1BQU0sR0FBRyxHQUFHLElBQUksYUFBRyxFQUFFLENBQUM7QUFHdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGtCQUFPLEdBQUUsQ0FBQyxDQUFDO0FBR25CLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBQSxtQkFBUSxFQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFO0lBQ3hDLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMsQ0FDSCxDQUFDO0FBR0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLG9CQUFTLEdBQUUsQ0FBQyxDQUFDO0FBR3JCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBQSxvQkFBUyxFQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0lBQzFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtDQUNqQyxDQUFDLENBQ0gsQ0FBQztBQUdGLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLElBQUksS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gXCJrb2FcIjtcbmltcG9ydCBrb2FCb2R5IGZyb20gXCJrb2EtYm9keVwiO1xuaW1wb3J0IGtvYVZpZXdzIGZyb20gXCJrb2Etdmlld3NcIjtcbmltcG9ydCBrb2FTdGF0aWMgZnJvbSBcImtvYS1zdGF0aWNcIjtcbmltcG9ydCBrb2FMb2dnZXIgZnJvbSBcImtvYS1sb2dnZXJcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcblxuLy8g6Kej5p6QIHJlcXVlc3QgYm9keTpcbmFwcC51c2Uoa29hQm9keSgpKTtcblxuLy8g5Yqg6L295qih5p2/5byV5pOOXG5hcHAudXNlKFxuICBrb2FWaWV3cyhwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4vdmlld3NcIiksIHtcbiAgICBleHRlbnNpb246IFwiZWpzXCIsXG4gIH0pXG4pO1xuXG4vLyDml6Xlv5dcbmFwcC51c2Uoa29hTG9nZ2VyKCkpO1xuXG4vLyDpnZnmgIHotYTmupDmnI3liqFcbmFwcC51c2UoXG4gIGtvYVN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4vcHVibGljXCIpLCB7XG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsIC8vIOS4gOS4quaciFxuICB9KVxuKTtcblxuLy8g6Lev55SxXG5hcHAudXNlKHJvdXRlci5yb3V0ZXMoKSkudXNlKHJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwO1xuYXBwLmxpc3Rlbihwb3J0KTtcbmNvbnNvbGUubG9nKGBhcHAgc3RhcnRlZCBhdCBwb3J0ICR7cG9ydH0uLi5gKTtcbiJdfQ==