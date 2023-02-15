"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const api_1 = __importDefault(require("./api"));
const html_1 = __importDefault(require("./html"));
const router = new koa_router_1.default();
router.use('/api', api_1.default.routes());
router.use('/html', html_1.default.routes());
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFnQztBQUNoQyxnREFBNkI7QUFDN0Isa0RBQStCO0FBRS9CLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRXhDLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgQXBpUm91dGUgZnJvbSAnLi9hcGknO1xuaW1wb3J0IEh0bWxSb3V0ZSBmcm9tICcuL2h0bWwnO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbnJvdXRlci51c2UoJy9hcGknLCBBcGlSb3V0ZS5yb3V0ZXMoKSk7XG5yb3V0ZXIudXNlKCcvaHRtbCcsIEh0bWxSb3V0ZS5yb3V0ZXMoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==